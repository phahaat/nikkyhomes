# Use a base image with Java
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built jar file into the container (adjust path if needed)
COPY target/nikkyhomes-1.0.0-SNAPSHOT.jar /app/nikkyhomes.jar

# Expose port 8080 to the outside world
EXPOSE 8080

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "/app/nikkyhomes.jar"]
