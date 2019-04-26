#include <SoftwareSerial.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

SoftwareSerial SoftSerialAM(7,8);

#define DHTPIN 2
#define DHTTYPE    DHT22   
DHT_Unified dht(DHTPIN, DHTTYPE);

uint32_t delayMS;
//delay
void SendData(String dat);
void SetupDHT();
String getDHT22Val();
void DHT22Loop();

void setup() {
  // put your setup code here, to run once:
  Serial.begin(230400);
   SoftSerialAM.begin(115200);
   SetupDHT();
   
}

void loop() {
  // put your main code here, to run repeatedly:
  
  DHT22Loop();
}

void SendData(String dat){

 
 //f = String('H')+String("22")+String('T')+String("100%");
  SoftSerialAM.println(dat);
delay(50);
}


void SetupDHT(){
   Serial.println("=================================");
  Serial.println("Loading DHT22...");
  dht.begin();
  sensor_t sensor;
  dht.temperature().getSensor(&sensor);
   Serial.println(F("------------------------------------"));
  Serial.println(F("Temperature Sensor"));
  Serial.print  (F("Sensor Type: ")); Serial.println(sensor.name);
  Serial.print  (F("Driver Ver:  ")); Serial.println(sensor.version);
  Serial.print  (F("Unique ID:   ")); Serial.println(sensor.sensor_id);
  Serial.print  (F("Max Value:   ")); Serial.print(sensor.max_value); Serial.println(F("°C"));
  Serial.print  (F("Min Value:   ")); Serial.print(sensor.min_value); Serial.println(F("°C"));
  Serial.print  (F("Resolution:  ")); Serial.print(sensor.resolution); Serial.println(F("°C"));
  Serial.println(F("------------------------------------"));
  // Print humidity sensor details.
  dht.humidity().getSensor(&sensor);
  Serial.println(F("Humidity Sensor"));
  Serial.print  (F("Sensor Type: ")); Serial.println(sensor.name);
  Serial.print  (F("Driver Ver:  ")); Serial.println(sensor.version);
  Serial.print  (F("Unique ID:   ")); Serial.println(sensor.sensor_id);
  Serial.print  (F("Max Value:   ")); Serial.print(sensor.max_value); Serial.println(F("%"));
  Serial.print  (F("Min Value:   ")); Serial.print(sensor.min_value); Serial.println(F("%"));
  Serial.print  (F("Resolution:  ")); Serial.print(sensor.resolution); Serial.println(F("%"));
  Serial.println(F("------------------------------------"));
  // Set delay between sensor readings based on sensor details.
  delayMS = sensor.min_delay / 50;
}

String getDHT22Val(){
  String val;
  val="#Sensor;DHT22;";
   sensors_event_t event;
  dht.temperature().getEvent(&event);
  if (isnan(event.temperature)) {
    Serial.println(F("Error reading temperature!"));
    return "";
  }
  else {
    Serial.print(F("Temperature: "));
    Serial.print(event.temperature);
    val=val+String(event.temperature)+";";
    Serial.println(F("°C"));
  }
  // Get humidity event and print its value.
  dht.humidity().getEvent(&event);
  if (isnan(event.relative_humidity)) {
    Serial.println(F("Error reading humidity!"));
  }
  else {
    Serial.print(F("Humidity: "));
    Serial.print(event.relative_humidity);
    val=val+String(event.relative_humidity)+"*";
    Serial.println(F("%"));
  }
  return (val);
  
}
void DHT22Loop(){
  String dat=getDHT22Val();
  
  if(dat.length()>2){
  
  
  delay(200);
  SendData(dat);
  Serial.println(dat);
  
  }
}

