
from moviepy.editor import VideoFileClip, concatenate_videoclips, vfx
import re
import utils



def fun(inputs, fileName):
    clips = []
    for item in inputs:
      clip = VideoFileClip(fileName).subclip(item['start_time'], item['end_time'])
      clips.append(clip)
    concatinate = concatenate_videoclips(clips)
    final_clip = concatinate.fx( vfx.speedx, 0.5)
    final_clip.write_videofile("new.mp4")


pattern = re.compile(r'([0-1]?\d|2[0-3])(?::([0-5]?\d))(?::([0-5]?\d))')
filename = input("Drag and drop video file here : ")

if not (utils.is_video_file(filename)):
  raise Exception("Sorry This is not video file")

break_input = False
inputs = []
while not break_input:
    si = input("Enter start time (e.g: hh:mm:ss) : ")
    ei = input("Enter end time (e.g: hh:mm:ss) : ")
    start_result = pattern.search(si)
    end_result = pattern.search(ei)

    if start_result == None:
      raise Exception("Plase enter valid Start Time e.g 01:12:33 ")
    if end_result == None:
      raise Exception("Plase enter valid End Time e.g 01:12:33 ")

    inputs.append({ 'start_time': si, 'end_time': ei })
    q = input("Want to added more points ? y: Yes, n: No ")
    if q == 'n' or q == 'no':
        break_input = True



try:
  fun(inputs, filename)
except Exception as e:
  print(f'An exception occurred : {e}')

print("Good Job !!")
