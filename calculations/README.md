### About
---
Simple bash script that checks the weather for the next 5 days at the location specified by user and outputs it in Fahrenheit and Celsius. Celsius conversion is performed by the script.

### Dependencies
---
- Terminal for command line access  

The main piece of software that this repo holds is a bash script, for that to run you will need:
- Bash v3.2.57 or newer (You can check your Node version by running ```sh --version``` in your Terminal)

- [jq](https://stedolan.github.io/jq/), which is a JSON processor used to procees the data obtained from API (If you are on Mac and have brew installed, jq can be installed with the following command: `brew install jq`)
### Setup and Usage
---
1. While you are in the home directory of this repo, press on the green "Code" button in the top right corner.
2. You will be prompted to copy an SSH or HTTPS URL to clone this repo to your local machine.
3. After you got that URL, go to the Terminal on your local machine(I will assume you are on Mac or Linux) and run the following command: 
```zsh
git clone *PASTE THE LINK HERE*
```
4. After all the files are copied to your local machine navigate to the newly created directory using the following command 
```zsh 
cd CISC3160-Lab1/calculations
```  
5. Since uploading API keys to GitHub is a bad idea, API key for VisualCrossing API, which is used for weater, is not set locally and you will have to set the `WEATHER_APIKEY` environment variable yourself:   
    - You can obtain your own API key here: [VisualCrossing API](https://www.visualcrossing.com/weather/weather-data-services#/login) or use mine `SYLFUEDB8WQNDBRR7VLSF9JR`(yes, I let it be public)
    - Run the following command: `export WEATHER_APIKEY="*YOUR API KEY GOES HERE*"`
    - Then: `source .bashrc`
6. When you are inside the `calculations` directory and done with setting your environment variable run : 
```zsh
sh weather.sh
```  