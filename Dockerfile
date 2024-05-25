FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/ItsFutureTrends/Godzilla-MD.git /root/ItsFutureTrends

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/ItsFutureTrends/node_modules

# Install dependencies
WORKDIR /root/ItsFutureTrends
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
# IF YOU ARE MODIFYING THIS BOT DONT CHANGE THIS  RUN rm -rf /root/ItsFutureTrends/node_modules
