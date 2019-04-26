
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <SoftwareSerial.h>

SoftwareSerial SoftSerialWD(D7,D8);

String getValueString(String data, char separator, int index);


String userName="testuser";


String dataUser ="";
String dataState ="";
String mac=(WiFi.macAddress());
char __mac[sizeof(mac)];
const char *ssid =	"PTCL-BB"; //////WiFi Router SSID
const char *pass =	"78ff5f74";   ////WiFi Router Password
const char *mqtt_server = "broker.hivemq.com";
const int mqtt_port = 1883;
const char *mqtt_user = "testUser";
const char *mqtt_pass = "testUser@nauman";
const char *mqtt_client_name = __mac;//"12312312312332212";// any random alphanumeric stirng
#define BUFFER_SIZE 100
String incoming="";
String content = "";
WiFiClient wclient;
PubSubClient client(wclient, mqtt_server,mqtt_port);

void callback(const MQTT::Publish& pub) {
  // handle message arrived
  Serial.print(pub.topic());
  Serial.print(" => ");
  if (pub.has_stream()) {
    uint8_t buf[BUFFER_SIZE];
    int read;
    while (read = pub.payload_stream()->read(buf, BUFFER_SIZE)) {
      Serial.write(buf, read);
    }
    pub.payload_stream()->stop();
    Serial.println("");
  } else
   {
    Serial.println(pub.payload_string());
   }

////////////////////////////////////////////

incoming=String(pub.payload_string());
Serial.println(pub.payload_string());
Serial.println(incoming);

if (incoming=="anything"){
///for future reference 
}

}


void setup() {
  // Setup console
  Serial.begin(230400);
  SoftSerialWD.begin(115200);
  delay(10);
  Serial.println();
  Serial.println();
 

  delay(1000);
}


void loop() {
  if (WiFi.status() != WL_CONNECTED) {
    Serial.print("Connecting to ");
    Serial.print(ssid);
    Serial.println("...");
    WiFi.begin(ssid, pass);

    if (WiFi.waitForConnectResult() != WL_CONNECTED)
      return;
    Serial.println("WiFi connected");
  }

  if (WiFi.status() == WL_CONNECTED) {
    if (!client.connected()) {
      Serial.println("Connecting to MQTT server");
      if (client.connect(MQTT::Connect(mqtt_client_name)
			 .set_auth(mqtt_user, mqtt_pass))) {
        Serial.println("Connected to MQTT server");
	client.set_callback(callback);
	
	client.subscribe("s/ds");//for future reference
      } else {
        Serial.println("Could not connect to MQTT server");   
      }
    }

    if (client.connected())
      client.loop();
  }
//  client.publish("c/data/d/temp","22");
  
  
  
  if(readIncomingData()!=""){
  Serial.println(readIncomingData());
    client.publish("c/data/d/string",readIncomingData());
  content="";
  }
}

String getValueString(String data, char separator, int index)
{
  //for future reference
  int found = 0;
  int strIndex[] = {0, -1};
  int maxIndex = data.length()-1;

  for(int i=0; i<=maxIndex && found<=index; i++){
    if(data.charAt(i)==separator || i==maxIndex){
        found++;
        strIndex[0] = strIndex[1]+1;
        strIndex[1] = (i == maxIndex) ? i+1 : i;
    }
  }

  return found>index ? data.substring(strIndex[0], strIndex[1]) : "";
}

String readIncomingData(){

char character;
int flag=0;
  while(SoftSerialWD.available()) {
    Serial.println(SoftSerialWD.available());
    if(flag==0){
    character = SoftSerialWD.read();
    
    if(character=='#'){
    content="";
      //character = SoftSerialWD.read();
      //content.concat(character);
    flag=1;
    
  }
    }
  if(flag==1){
      character = SoftSerialWD.read();
      if(character=='*'){
        break;
      }
      content.concat(character);
      
      //Serial.println(content);
  }
  }
  if (content != "" && content.length()>2) {
    
    return content;
  }
  return "";
}

