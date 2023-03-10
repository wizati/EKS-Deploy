# Use an existing image as a base
FROM nginx:latest

# Copy the static HTML files to the container's web root directory
COPY index.html /usr/share/nginx/html/

# Expose port 8080 to the outside world
EXPOSE 8080

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
