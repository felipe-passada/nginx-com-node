FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]


