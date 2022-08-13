
from moviepy.editor import VideoFileClip, concatenate_videoclips
import re
import os



def fun(start_time, end_time, fileName):
    clip2 = VideoFileClip(fileName).subclip(start_time,end_time)
    clip2.write_videofile("new.mp4")



start_time = input("Enter start time (e.g: hh:mm:ss) : ") or '00:00:05'
end_time = input("Enter end time (e.g: hh:mm:ss) : ") or '00:00:10'
pattern = re.compile(r'([0-1]?\d|2[0-3])(?::([0-5]?\d))(?::([0-5]?\d))')
start_result = pattern.search(start_time)
end_result = pattern.search(start_time)

if start_result == None:
    raise Exception("Plase enter valid Start Time e.g 01:12:33 ")
if end_result == None:
    raise Exception("Plase enter valid End Time e.g 01:12:33 ")
path = str(os.getcwdb())
try:
  fun(start_time, end_time, '100seconds.mp4')
except Exception as e:
  print(f'An exception occurred : {e}')

print("Good Job !!")
