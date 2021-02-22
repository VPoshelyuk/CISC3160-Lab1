# import necessary modules
import csv
import os

directory = 'data'  #directory containing CSVs
songs_dict = {}     #dictionary to save all the songs and their # of streams

for filename in os.listdir(directory):  #for every file in data directory
    if filename.endswith('.csv'):       #only process CSVs
        with open(os.path.join(directory, filename)) as csv_file:   #open file
            csv_reader = csv.reader(csv_file, delimiter=',')        #create a reader
            line_count = 0                                          #declare counter
            for row in csv_reader:                                  #loop through each row of CSV
                if line_count > 1:                                  #only rows 2 and > contain necessary information
                    song_name = f'\t{row[2]} - {row[1]}'            #create song name
                    streams = int(row[3])                           #convert number of streams to integer
                    if song_name not in songs_dict:                 #if song is not in dictionary, append new record
                        songs_dict[song_name] = streams
                    else:                                           #else add streams number
                        songs_dict[song_name] += streams
                line_count += 1                                     #proceed to the next line
print('\tOutput format: artist name - song name(# of streams)')     #printing routine
print('\t###sorted by number of streams in descending order###\n')
for index, record in enumerate(sorted(songs_dict, key=songs_dict.get, reverse=True)):
    print(f'\t{index+1}.{record}({songs_dict[record]})')