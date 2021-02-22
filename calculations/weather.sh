#!/bin/sh

# Bash script created by Slava Pashaliuk on Feb 20, 2021

echo "Hello! Please enter a city you want to get a list of temperatures for:" #prompt user for input
read CITY                                                                     #save the response into a variable
SANITIZED_CITY=`echo ${CITY// /_}`                                            #replace spaces with _ for city names consistent of 2 and more words(API req)
#get the response code and save odtained response into a file
CODE=$(curl -sSL -w '%{http_code}' -o info.txt "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=$SANITIZED_CITY&aggregateHours=24&forecastDays=7&unitGroup=us&contentType=json&key=$WEATHER_APIKEY")
if [[ "$CODE" = 404 ]] || [[ $SANITIZED_CITY =~ [0-9] ]]; then  #if there is an error accessing the server or entered city name contains numbers, output an error
    echo "There was an error fetching your weather data"
elif [[ "$CODE" =~ ^2 ]]; then                                  #else if response is obtained, find the information needed, perform calculations and output the final result
    temps=$(cat info.txt | jq ".locations.$SANITIZED_CITY.values[] | .temp")    #process the response
    DAILY_TEMPERATURES_IN_F=()  #declare variables
    DAILY_TEMPERATURES_IN_C=()  #
    for daily_temp in $temps    #iterate over the obtained temperatures, save Fahrenheit values and calculate && save Celsius values  
    do
        DAILY_TEMPERATURES_IN_F+=($daily_temp)
        DAILY_TEMPERATURES_IN_C+=(`echo "scale=1; ($daily_temp-32)*(5/9)" | bc -l`)
    done

    echo "\nThe weather in $CITY for the next 5 days:"          #printing routine
    printf "%-16s%s\n" "°F:" "°C:"
    for ((i=0; i < ${#DAILY_TEMPERATURES_IN_F[@]}; i++))
    do
        printf "%-15s%s\n" "${DAILY_TEMPERATURES_IN_F[$i]}" "${DAILY_TEMPERATURES_IN_C[$i]}"
    done
else                                                            #else output server error
    echo "ERROR: server returned HTTP code $CODE"
    exit 1
fi