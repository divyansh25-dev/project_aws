
FROM python:alpine3.7
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 5001
RUN chmod -R 755 config.sh
CMD ["./config.sh"]
