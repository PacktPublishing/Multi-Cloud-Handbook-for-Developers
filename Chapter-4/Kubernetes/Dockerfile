# Use a lightweight Python base image
FROM python:3.8-alpine

# Set the working directory in the container
WORKDIR /app

# Copy only the Python script into the container
COPY hello.py /app
# Expose port 80
EXPOSE 80
# Command to run the Python script
CMD ["python", "./hello.py"]