### About
---
Super simple CLI tool that calculates the number of appearances of songs on the 4 latest weekly CSV reports from [SpotifyCharts](https://spotifycharts.com/regional) and outputs the obtained information in descending order of number of streams.

### Dependencies
---
- Terminal for command line access  

The main piece of software that this repo holds is a Python3 app, for that to run you will need:
- Python v3.6.0 or newer (You can check your Node version by running ```python3 -V``` in your Terminal)

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
cd CISC3160-Lab1/reporting
```  
5. When you are inside the `reporting` directory, run the following command and you will be presented with the program output: 
```zsh
python3 process_csv.py
```  