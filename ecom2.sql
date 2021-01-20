CREATE DATABASE  IF NOT EXISTS `mini_project` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mini_project`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mini_project
-- ------------------------------------------------------
-- Server version	5.7.32-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `Address_id` int(11) NOT NULL AUTO_INCREMENT,
  `address_uuid` varchar(255) NOT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `First_name` varchar(25) NOT NULL,
  `Last_name` varchar(25) NOT NULL,
  `address` varchar(50) NOT NULL,
  `City` varchar(30) NOT NULL,
  `State` varchar(30) NOT NULL,
  `Pincode` varchar(15) NOT NULL,
  `Phone` varchar(15) NOT NULL,
  PRIMARY KEY (`Address_id`),
  KEY `Email` (`Email`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `users` (`Email`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'2aef18be-2986-4f3a-bf6b-76fab3c6bfe2','ayush13things@gmail.com','Ayush','Naik','Sainik School Bijapur','Bijapur','Karnataka','586102','9901448007'),(2,'3b20f695-a1d0-4ea6-8202-8a191baac82f','ayush13things@gmail.com','Test','User','Sainik School Bijapur','Bijapur','Karnataka','586102','9901448007'),(3,'bebdcf13-6e58-4ca6-87fc-c7cb1d283dc0','ayush13things@gmail.com','Test','User','Bldea College','Bijapur','Karnataka','586102','9901448007'),(4,'95682bd3-b029-4a09-bf42-9c00db4d94c1','ayush13things@gmail.com','Test','User','Bldea College','Bijapur','Karnataka','586102','9901448007'),(5,'af2fd21f-efb8-4ca3-b97e-cd39e8e76a39','ayush13things@gmail.com','Test','User','Bldea College','Bijapur','Karnataka','586102','9901448007');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `Email` varchar(50) DEFAULT NULL,
  `Prod_id` int(11) NOT NULL,
  `UUID` varchar(255) DEFAULT NULL,
  KEY `Email` (`Email`),
  KEY `Prod_id` (`Prod_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `users` (`Email`) ON DELETE CASCADE,
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`Prod_id`) REFERENCES `products` (`Prod_id`) ON DELETE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES ('ayush13things@gmail.com',304,'4266cdda-0887-430e-853f-ab22c400ef69');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `Categories_name` varchar(15) NOT NULL,
  PRIMARY KEY (`Categories_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES ('Appliances'),('Beauty'),('Electronics'),('Fashion'),('Furniture'),('Home'),('Mobiles'),('Sports and More'),('Toys and Baby');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `Order_uuid` varchar(255) NOT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Prod_id` int(11) NOT NULL,
  `Order_date` datetime NOT NULL,
  `Order_price` int(11) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `Email` (`Email`),
  KEY `Prod_id` (`Prod_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `users` (`Email`) ON DELETE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`Prod_id`) REFERENCES `products` (`Prod_id`) ON DELETE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,'2aef18be-2986-4f3a-bf6b-76fab3c6bfe2','ayush13things@gmail.com',5,'2021-01-16 19:48:51',103590),(3,'2aef18be-2986-4f3a-bf6b-76fab3c6bfe2','ayush13things@gmail.com',802,'2021-01-16 19:48:51',103590),(7,'95682bd3-b029-4a09-bf42-9c00db4d94c1','ayush13things@gmail.com',5,'2021-01-16 21:40:29',97900);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `Prod_id` int(11) NOT NULL,
  `Categories_name` varchar(15) DEFAULT NULL,
  `Prod_name` varchar(200) DEFAULT NULL,
  `Prod_price` int(11) NOT NULL,
  `Prod_rating` int(11) NOT NULL,
  `Prod_specs` varchar(1000) DEFAULT NULL,
  `Prod_img_url` varchar(350) NOT NULL,
  PRIMARY KEY (`Prod_id`),
  KEY `Categories_name` (`Categories_name`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`Categories_name`) REFERENCES `categories` (`Categories_name`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Mobiles','Redmi 8A Dual',6999,4,'2 GB RAM | 32 GB ROM | Expandable Upto 512 GB\n15.8 cm (6.22 inch) HD+ Display\n13MP + 2MP | 8MP Front Camera\n5000 mAh Lithium Polymer Battery\nQualcomm Snapdragon 439 Processor','https://images-na.ssl-images-amazon.com/images/I/71yXShgxvpL._SL1500_.jpg'),(2,'Mobiles','Samsung Galaxy M11',9999,4,'13MP (F1.8) main camera + 5MP (F2.2) ultra wide camera + 2MP (F2.4) depth rear camera | 8MP (F2.0) front facing punch hole camera\n6.4-inch (16.24 centimeters) infinity-O display, HD+ capacitive multi-touch touchscreen with 720 x 1520 pixels resolution, 270 ppi | 16M color support\nMemory, Storage & SIM: 3GB RAM | 32GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G)\nAndroid v10.0 operating system with 1.8GHz Qualcomm | SDM450-F01 octa core processor\n5000mAH lithium-ion battery','https://images-na.ssl-images-amazon.com/images/I/71hqi389rcL._SL1500_.jpg'),(3,'Mobiles','Vivo S1 Pro',18990,4,'48MP+8MP+2MP+2MP AI Quad Rear Camera and 32MP front facing camera\n16.20 centimeters (6.38-inch) FHD+ Super AMOLED Display with 1080 × 2340 pixels resolution\nMemory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G)\nFuntouch OS 9.2 (Based on Android 9.0) operating system with 2.0GHz Qualcomm Snapdragon 665 octa core processor\n4500mAH lithium-ion battery with Type-C 18W Dual-Engine Fast Charging technology','https://images-na.ssl-images-amazon.com/images/I/51sTYdFWcZL._SL1181_.jpg'),(4,'Mobiles','OnePlus 8T 5G',45999,5,'Rear Quad Camera with 48 MP Sony IMX586 Sensor, 16 MP Ultra Wide Angle, 5 MP macro lens and 2 MP monochrome lens | Front Camera with 16 MP Sony IMX471 Sensor\n6.55 inch ( 16.63 centimeters) 120 Hz Fluid AMOLED Display with 2400 X 1080 Pixels resolution, 402 PPI density\n2.86 GHz Qualcomm Snapdragon 865 Octa-core Processor + Adreno 650 GPU , Oxygen OS based on Android 11 Operating system\n12 GB RAM | 256 GB ROM\n4500 mAH Lithium-ion battery with 65 W \"Warp charge\"','https://images-na.ssl-images-amazon.com/images/I/71CuwgwCQdL._SL1500_.jpg'),(5,'Mobiles','Apple iPhone Xs',97900,5,'5.8-inch Super Retina display (OLED) with HDR1\nIP68 dust and water resistant (maximum depth of 2 metres up to 30 minutes)2\n12MP dual cameras with dual OIS and 7MP TrueDepth front camera - Portrait mode, Portrait Lighting, Depth Control and Smart HDR\nFace ID for secure authentication3\nA12 Bionic with next-generation Neural Engine\nWireless charging-works with Qi chargers\niOS 12 with Memoji, Screen Time, Siri Shortcuts, and Group FaceTime','https://images-na.ssl-images-amazon.com/images/I/61hS46kNvdL._SL1000_.jpg'),(101,'Electronics','Canon EOS 1500D 24.1 Digital SLR Camera',30490,5,'Sensor: APS-C CMOS Sensor with 24.1 MP (high resolution for large prints and image cropping)\nISO: 100-6400 sensitivity range (critical for obtaining grain-free pictures, especially in low light)\nImage Processor: DIGIC 4+ with 9 autofocus points (important for speed and accuracy of autofocus and burst photography)\nVideo Resolution: Full HD video with fully manual control and selectable frame rates (great for precision and high-quality video work)\nConnectivity: WiFi, NFC and Bluetooth built-in \nLens Mount: EF-S mount compatible with all EF and EF-S lenses','https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg'),(102,'Electronics','HP 14 Thin & Light 14-inch FHD Laptop',59599,4,'Processor: 11th Gen Intel Core i5-1135G7 (2.4 GHz base frequency, up to 4.2 GHz with Intel Turbo Boost Technology, 8 MB L3 cache, 4 cores)\nOperating System: Pre-loaded Windows 10 Home Single Language | Pre-Loaded Microsoft Office 2019\nDisplay: 14 -inch FHD, IPS, micro-edge, brightview | Brightness: 250 nits | Screen Resolution: 1920 x 1080\nMemory & Storage: 8 GB DDR4-2666 SDRAM (2 x 4 GB) & Expandable Upto 16 GB | Storage: 512GB PCIe NVMe SSD\nDesign & battery: Laptop weight: 1.47 kg | Battery life mixed usage = Up to 7 hours and 30 minutes | In the Box: Laptop, Battery, User Manual and charger\nGraphics: Intel UHD Graphics\nCamera & Microphone: HP TrueVision HD camera with integrated dual array digital microphone','https://images-na.ssl-images-amazon.com/images/I/81qlKbTuQXL._SL1500_.jpg'),(103,'Electronics','boAt Rockerz 255 Sports in-Ear Bluetooth Neckband Earphone',1399,4,'Battery: Rockerz 255 offers a playback time of up to 6 hours and gets charged to 100% in 1.5 hours\nBluetooth: It has Bluetooth v4.1 with a range of 10m and is compatible with Android & iOS\nIPX rating: It has an IPX5 marked water & sweat resistance\nANC: NA. Talktime 6 hours. Standby Time 150 hours\nNo. of Mic: 1\nOther Inclusions: Additional Earmuffs, Micro USB Charging Cable, Warranty Card, User Manual\nSports friendly design with Easy Controls','https://images-na.ssl-images-amazon.com/images/I/61ku39qVEzL._SL1500_.jpg'),(104,'Electronics','LG 687 L Frost Free Side-by-Side Refrigerator',81990,4,'Energy savings with inverter linear compressor\nCapacity 687 L: Suitable for families with 5 or more members\nWarranty: 1 year on product, 10 years on compressor\nMultiple cooling air vents distribute and circulate cool air to every corner of the refrigerator, ensuring that each and every food items is properly cooled\nSmart Diagnosis is a fast and easy way to troubleshoot issues\nMulti digital sensors monitor both internal and external temperatures for temperature consistency which helps to maintain the quality of food for longer\nWith 600 liters & more of mega capacity, you can enjoy Better organization and smarter storage. Stock up on and store as per your need','https://images-na.ssl-images-amazon.com/images/I/51OoCS1p7DL._SL1495_.jpg'),(105,'Electronics','OnePlus Y Series 80 cm',14990,3,'Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz\nConnectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices\nSound : 20 Watts Output | Dolby Audio\nSmart TV Features: Android TV 9.0 | OnePlus Connect | Google Assistant | Play Store | Chromecast | Shared Album | Supported Apps : Netflix, YouTube, Prime video | Content Calendar | OxygenPlay\nDisplay : LED Panel | Noise Reduction | Colour Space Mapping |Dynamic Contrast | Anti-Aliasing | DCI-P3 93% colour gamut | Gamma Engine\nDesign: Bezel-less | Screen/Body Ratio = 91.4%\nWarranty Information: 1 year comprehensive warranty and additional 1 year on panel provided by the manufacturer from date of purchase','https://images-na.ssl-images-amazon.com/images/I/817gj7pfUzL._SL1500_.jpg'),(201,'Furniture','Spacewood Winner Study Table',7139,4,'Product Dimensions: Length (40 cm), Width (108 cm), Height (120 cm), Mount Type: Free Standing\nMaterial: Engineered Wood - Particle Board, Finish: Woodpore, Color: Rigato Walnut\nHas an adjustable top which doubles up as a writing desk & Open shelves and 3 closed cabinets provide plenty of storage space\nRequires Assembly: The product requires carpenter assembly and will be provided by the seller\n36 months on manufacturing defects as per warranty card terms and conditions\nWater Resistant, Fungus, Termite And Scratch Proof','https://images-na.ssl-images-amazon.com/images/I/61nJ%2Bda6btL._SL1128_.jpg'),(202,'Furniture','Table and Folding Chair',1249,2,'Color :- Brown ; Material :- Wooden folding chair and table\nCare Instructions-Wipe Clean With A Cloth, No Water\nSIZE ; 25.4 x 35.6 x 35.6 Centimeters 2 KG\nMade with high durable quality Wood that gives you assurance of stability of item\nSquare Foldable table and chair, easy to carry anywhere. A perfect gift item for your kids, relatives on any occasion.','https://images-na.ssl-images-amazon.com/images/I/41o1rwdoGnL.jpg'),(203,'Furniture','Keyholder',299,4,'Product Dimensions: Length (9.85 inches), Width (2.2 inches), Height (6 inches) , Weight: 300 Grams, 7 Metal hooks for hanging all types of keys Multiple Ways.Perfect Space Utilization For Modern Home','https://images-na.ssl-images-amazon.com/images/I/710lt9GF1UL._SL1500_.jpg'),(204,'Furniture','Furniture Sofa Set for Home',12559,3,'Product Dimension: Length (71 inch), Width (31 inch), Height (34 inch) Meatrial: Sheesham Wood, Seating Capacity: 3 Seat\nProduct Material:- Sheesham Wood (Honey Finish)\nColor: (Honey Finish)Cushion: Beige color, Style: Contemporary\nThe product requires basic self assembly at customers end and comes with self assembly instructions along with necessary accessories','https://images-na.ssl-images-amazon.com/images/I/21cszyMge-L.jpg'),(301,'Fashion','Mens Round Neck Contrast Hooded Full Sleeves Stripe T-Shirt',349,3,'Fit Type: Regular Fit\n100% Cotton hooded full sleeve t-shirt and Comfort feel\nBright and Solid Colours with 0% colour Fading\nRegular Fit with Comfort due to breathable cotton fabric','https://images-na.ssl-images-amazon.com/images/I/815wZt85BdL._UL1500_.jpg'),(302,'Fashion','Timex Fashion Analog Multi-Color Dial Mens Watch',1799,3,'Dial Color: Multi-Color, Case Shape: Round\nBand Color: Brown, Band Material: Leather. Case Material: Brass\nWatch Movement Type: Quartz, Watch Display Type: Analog\nWater Resistance Depth: 30 meters','https://images-na.ssl-images-amazon.com/images/I/61KUK20IO4L._UL1000_.jpg'),(303,'Fashion','Mens Coats Jacket',499,5,'Fit Type: Regular Fit\nWarm, comfortable to wear and feel good on the skin! Do not feel cold anymore!\nSimple, casual and stylish. Can with t-shirt, blouse, jeans, leisure pants','https://images-na.ssl-images-amazon.com/images/I/61ir1TiLo3L._SL1024_.jpg'),(304,'Fashion','BATA Mens Q 3 Formal Shoes',749,4,'Closure: Lace-Up\nShoe Width: Medium\nMaterial Type: Synthetic\nLifestyle: Business\nClosure Type: Lace-Up','https://images-na.ssl-images-amazon.com/images/I/81g2LzWlXTL._UL1500_.jpg'),(305,'Fashion','Ray-Ban RB3025 Aviator Classic',6890,5,'Lens Width : 51 mm, Bridge Width : 14 mm, Temple Length : 135 mm\nEach pair of sunglasses comes with a case and lens cloth to clean and protect them from scratches and damage','https://images-na.ssl-images-amazon.com/images/I/71963rqsd0L._UL1500_.jpg'),(401,'Sports and More','Nivia Kross World Volleyball',499,5,'Included Components : 1 Volleyball | Color : Yellow/Blue | Size :4\nSuitable For: All Conditions | Ideal For: Training/Match\nMaterial : Rubber | Core/Bladder Material : Butyl | Construction Type: Hand Stitched | Number of Panel : 18| Waterproof:\nRubberized Stitched','https://images-na.ssl-images-amazon.com/images/I/81eRVhCsATL._SL1500_.jpg'),(402,'Sports and More','Cockatoo CTM-04 Steel 2 HP Peak Motorised Multi-Function Treadmill',20999,4,'Technical Feature:Time, Speed,Distance, Calorie, Pulse, Fat Measure\nRunning Surface(LxB): 390 - 1100 mm(15.3\" x 43.3\")\nMotor Power: 2 HP\nMaximum User Weight: 90 Kg','https://images-na.ssl-images-amazon.com/images/I/61UhYJEeQcL._SL1200_.jpg'),(403,'Sports and More','Hero Blast 20T Single Speed Kids Bike',3542,3,'Tire size : 20 inches | Frame Size : 12 inches\nIdeal For :7 to 9 Years | Min Rider Height :3 ft 10 inches | Max Rider Height :4 ft 6 inch\nFront Brake : Caliper Brake | Rear Brake : Caliper Brakess\nGear : Single Speed\nFrame Material : Steel | Suspension : Rigid','https://images-na.ssl-images-amazon.com/images/I/71Cfb2ybSCL._SL1500_.jpg'),(404,'Sports and More','Lycan Beast PVC Cricket Bat Kit for All Age Groups',749,2,'suitable for soft ball cricket u can use ( tennis ball , wind ball & cosco ball )\nDelivers minimum 25% more power than a wooden bat.\nmade with eco friendley hard plastic\nvery durable , light weight\nPackage Contents: 1 cricket bat','https://images-na.ssl-images-amazon.com/images/I/71PMch1u8xL._SL1100_.jpg'),(405,'Sports and More','Yonex Nanoray 6000I G4-U Badminton Racquet with free Full Cover',1299,3,'Grip Size : G4 (3.25 Inches)| Weight : 3U (85-92 grams)\nColor : Blue | Head Shape : Isometric\nString Level : 24 pounds | Strung Type : Strung\nBalance Type : Head Light |Playing Level : All\nMaterial : Aluminum\nShaft - Steel','https://images-na.ssl-images-amazon.com/images/I/81kTf8koR-L._SL1500_.jpg'),(501,'Toys and Baby','Super Cars Blaze Truck Children Gift Toys Multi Color',549,5,'Plastic Multicolor 25.4 x 19.7 x 8.5 cm; 360 Grams','https://images-na.ssl-images-amazon.com/images/I/81P%2BGPW%2BvGL._SL1486_.jpg'),(502,'Toys and Baby','Cube Magic Cube Puzzle Toy',339,4,'For all Ages\nChallenging and fun\nExcellent stability','https://images-na.ssl-images-amazon.com/images/I/513l87wec6L._SL1000_.jpg'),(503,'Toys and Baby','SN Toys Oye Bubly Cute Doll',248,3,'Package Content: Soft Fabric Cute Stuffed Soft Doll\nPremium Quality and size, which is Perfect for hugging and snuggling, Non-Toxic And Soft Fabric, Skin Friendly\nPerfect Gift For Your Loved Once & Great Gifts for all Occasions and Ages\nVery Attractive To Make You Have A Good Feeling All The Time, Gift This Soft, Smooth And Cuddly.\nSize 9 Inch','https://images-na.ssl-images-amazon.com/images/I/61s-GH5vzYL._SL1500_.jpg'),(504,'Toys and Baby','Car for Kids, Battery Operated Horn, Music & Ligh',1013,3,'Certified as per European Standard EN 71\nIt helps baby to develop gross motor skills in the most fun way\nHorn and music keeps the baby indulged in active play\nSpacious seat with safety backrest I Parent push handle\n4 big and wide wheels add to the safety & comfort of the child\nRecommended Age/Weight: 12 to 36 months up-to 25 kgs','https://images-na.ssl-images-amazon.com/images/I/81oI1en-stL._SL1500_.jpg'),(505,'Toys and Baby','Strike Elite Delta Trooper Combat Blaster with Darts',1889,5,'Strike Elite Delta Trooper Combat Blaster with Darts','https://images-na.ssl-images-amazon.com/images/I/81dRjHAPXOL._SL1500_.jpg'),(601,'Beauty','Garnier Men Power White Anti-Pollution Double Action Facewash',152,5,'First 2 in 1 texture Facewash\nEnriched with goodness of Charcoal & Clay\nRemoves Dust & Pollution\nGives Brighter looking skin','https://images-na.ssl-images-amazon.com/images/I/51lVD-AxVhL._SL1000_.jpg'),(602,'Beauty','Nautica Voyage Eau de Toilette For Men',2135,3,'5.08 x 8.89 x 11.43 cm; 95.82 Grams  100.0 millilitre Fragrance color, and authentic style','https://images-na.ssl-images-amazon.com/images/I/81UuC4TEGFL._SL1500_.jpg'),(603,'Beauty','Beardo Beard and Hair Growth Oil',550,3,'Condition, smooth, moisturize, make those beautiful beards and moustache soft, manageable and frizz free, while also conditioning the skin underneath and getting rid of itchiness\nThis blend hydrates skin, makes your beard manageable, improves growth, while providing subtle scents perfect for both days in the office and on the weekends\nNatural powerhouses like sesame oil, rose, hibiscus, vitamin b6 and others form a potent combination to renew and re energise hair production\nMassage deep into the facial region and scalp','https://images-na.ssl-images-amazon.com/images/I/51f1NfI1tBL._SL1000_.jpg'),(604,'Beauty','Santoor Sandal & Turmeric Soap for Total Skin Care',122,4,'Great solution for problems such as blackhead, acne and skin allergies\nConsists of sandalwood which is good for both skin types - Dry and oily skin\nHas antimicrobial properties, making it a popular herbal antiseptic for treating minor skin abrasions\nIt removes tanning, cures skin itching and detoxifies the skin\nLeaves the skin refreshingly fragrant','https://images-na.ssl-images-amazon.com/images/I/815B98uwHuL._SL1500_.jpg'),(605,'Beauty','Maybelline New York Color Sensational Creamy Matte Lipstick',192,4,'The Maybelline Color Sensational Creamy Mattes Lipstick has a unique, velvety matte cream formula that offers a non-drying & un-crackable finish that stays comfortably on your lips through the day\nThese hydrating Maybelline lipstick shades are are infused with honey nectar to keep your lips moisturized all day long. The Colour Sensation lipsticks glide on your lips smoothly for a comfortable wear.\nThe Color Sensational Creamy Matte Lipsticks are available in 30+ pigmented shades, from subtle nudes to bold reds and everything in between.\nPair the Color Sensational Creamy Matte Lipstick with a nourishing Maybelline Lip Balm for colour and care','https://images-na.ssl-images-amazon.com/images/I/51gf6jIoC7L._SL1300_.jpg'),(701,'Home','Spin Plastic Bucket Mop',599,3,'Dimensions (L x W x H): 46 cm x 26 cm x 23 cm, Rod Length: 113 cm\nPackage contents: 1 complete mop set with 1 extra refill\nDonts- Dont push the mop with force in locked state while trying to spin as it can damage the locking and spinning mechanism of the mop. Always ensure that mop is unlocked before spinning in the bucket wringer.\nA longer and sturdy puller handle helps to carry the bucket with ease from one place to another\nMicro fibre refill with super absorbent capacity','https://images-na.ssl-images-amazon.com/images/I/81lcigiRi1L._SL1500_.jpg'),(702,'Home','Saral Home Turquoise Soft Microfiber Anti-Skid Bath Mat',299,4,'MATERIAL: Made From 100% High Quality Polyester yarn to adds Super-Soft feel & comfort. it?s fine denier thread have excellent water absorption capacity & dries faster.\nPROPERTIES: Stripe Pattern, Well Stitched, Overlock Borders, Round edges, Rectangular shape.\nPERFORMANCE : Anti-skid rubber latex backing features keep the runner in place even in wet condition.\nCARE: Gentle cycle machine wash keep the product safe, Hang to dry or flat air dry. The polyester yarn will not lose color & rather after wash the fabric will become more softer and as good as new one.\nUSAGE: The mat protect your feet from cold floor after shower, be it in bathroom or inside living room.','https://images-na.ssl-images-amazon.com/images/I/A1f9OfRLK5L._SL1500_.jpg'),(703,'Home','Cooking Bowl | Handi Set of 5',500,5,'Product Dimensions : 20 x 20 x 10 cm','https://images-na.ssl-images-amazon.com/images/I/61JAMeiQMQL._SL1100_.jpg'),(704,'Home','Pigeon By stovekraft Amaze Plus 1.5 Litre Electric kettle',649,4,'The classical mirror polish of the appearance makes your electric kettle unique and aesthetic, which can match any type of kitchen design and 360° swivel base is connected with standard power cord for safe usage and convenient storage','https://images-na.ssl-images-amazon.com/images/I/51GNDwvogcL._SL1080_.jpg'),(705,'Home','Pigeon by Stovekraft Favourite Outer Lid Non Induction Aluminium Pressure Cooker',599,3,'Comes with four level of safety. Dishwasher Safe : Yes\nStrong, sturdy and durable\nErgonomic Bakelite handle for ease of use\nColour: Silver, Material: Aluminium\nPackage Contents: 1-Piece pressure cooker (3 litres)','https://images-na.ssl-images-amazon.com/images/I/61HTbED4-hL._SL1390_.jpg'),(801,'Appliances','Voltas 1.5 Ton 4 Star Inverter Split AC',32499,3,'Split AC; 1.5 ton capacity\nEnergy Rating: 4 Star\nWarranty: 1 year on product, 1 year on condenser, 5 years on compressor\nSplit AC with inverter compressor: variable speed compressor which adjusts power depending on heat load. It is most energy efficient and has lowest-noise operation\nCapacity: 1.5 ton. Suitable for medium sized rooms (111 to 150 sq ft)\n4 Star Rating\nPercent copper condenser coil: better cooling and requires low maintenanc','https://images-na.ssl-images-amazon.com/images/I/21Fi5ysSIyL.jpg'),(802,'Appliances','Bajaj Platini PX97 Torque 36-Litres Personal Air Cooler (White)',5690,3,'Capacity: 36 Litres; Ideal for room size of upto 150 Sq Ft. Suitable for all climates and coastal regions\nProduct dimensions (LxBxH): 45.5 cm x 43.5 cm x 82.0 cm\nHoneycomb cooling media, easily removable pads; 3 Side cooling pad for enhanced performance\nCastor wheel for easy mobility. Cord effective length 1.5\n3 way speed control; Quite Performance; Four way air deflection\nPower: 100 Watts; Operating voltage: 230 V; Works of Inverter','https://images-na.ssl-images-amazon.com/images/I/71hKAblAn-L._SL1500_.jpg'),(803,'Appliances','Pigeon by Stovekraft Acer Plus Induction Stove',1595,4,'Feather touch control\n1800 Watt Power Consumption\n35% energy savings compared to LPG Cooking\nPreset timer - Auto switch off\n8 Menus - Installed Induction cooktop\nLED Display for temperature indication\nSmart timer for hands free cooking','https://images-na.ssl-images-amazon.com/images/I/51C4324ToML._SL1000_.jpg'),(804,'Appliances','IFB 23 L Convection Microwave Oven',12790,5,'Capacity-23L:Suitable for families with 3-4 members; Convection: Can be used for baking along with grilling, reheating, defrosting and cooking Brand provides a starter kit with this product\nControl: Touch Key Pad (Membrane) is sensitive to touch and easy to clean\nSpecial features: 71 auto cook menu options, steam clean\nChild Lock: Ensures complete safety especially for homes with small children','https://images-na.ssl-images-amazon.com/images/I/8144NPAnWmL._SL1500_.jpg'),(805,'Appliances','BLOWHOT 60 Cms 1,200 m3/h Heat Auto Clean Chimney',11550,4,'Size : 60 Cms | Suction Capacity : 1,200 m3/h\nControl Type : Motion Sensor Gesture with Digital Display\nBlower Type : Metal Blower | Noise : <59 dBA\nType : Wall Mounted | Heat Auto Clean\nFilter Type : Baffle Filter','https://images-na.ssl-images-amazon.com/images/I/51wUcPRwvLL._SL1000_.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `Name` varchar(25) NOT NULL,
  `DOB` date NOT NULL,
  `Phone` decimal(10,0) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  PRIMARY KEY (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Arjun','2009-01-07',9901448007,'arjun@gmail.com','password'),('adsa','2021-01-13',1234567891,'asdasd','adasd'),('adsa','2021-01-13',1234567891,'asdasda2','adasd'),('sadsa','2021-01-08',1234567891,'asdsa','sadsad'),('adsad','2021-01-05',1234567891,'asdsad@gmail.com','password'),('sadsa','2021-01-08',1234567891,'asdsasa','sadsad'),('sadsa','2021-01-08',1234567891,'asdsasavsa','sadsad'),('Ayush Naik','2000-07-20',9901448007,'ayush13things@gmail.com','password'),('sad','2021-01-07',1234567891,'sad','sadsad'),('asd','2021-01-06',1234567891,'sadasd','awdada'),('asdsa','2021-01-07',1234567891,'sads','asdasd'),('sads','2020-12-29',1234567891,'sdsadsa@gmail.com','password'),('test','2003-05-13',6361525569,'testemail@gmail.com','password');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-20 15:41:59
