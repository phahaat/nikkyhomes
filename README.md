# 🏡 NikkyHomes

NikkyHomes is a modern real estate website built with **Spring Boot, MySQL, and JavaScript**, designed to showcase properties dynamically with an interactive UI.

## 🚀 Features
- ✅ User authentication with JWT
- ✅ Property listings with filters
- ✅ Interactive UI with JavaScript
- ✅ Database integration with MySQL
- ✅ Responsive and colorful design

## 📂 Project Structure
NikkyHomes/ │── src/ │ ├── main/ │ │ ├── java/nikkyhomes/ (Spring Boot Backend) │ │ ├── resources/ (Application properties & templates) │ ├── test/ (Testing files) │── frontend/ (HTML, CSS, JavaScript) │── README.md │── pom.xml (Maven dependencies)
## ⚡ Installation
### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/NikkyHomes.git
cd NikkyHomes

##configure the database
spring.datasource.url=jdbc:mysql://localhost:3306/nikkyhomes
spring.datasource.username=root
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update

##Run the apllication
mvn spring-boot:run

###Open the website
http://localhost:8080

