# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Python dependencies from requirements.txt
RUN pip3 install -r requirements.txt

# Run your Python application with the specified command
CMD ["python3", "./main.py", "--command", "run"]