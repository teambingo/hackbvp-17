from gtts import gTTS
from tempfile import TemporaryFile
import os

path = input("Enter path of the file you want to listen: ")
with open(path) as file:
	text_input = file.read()
	file.close()
lang_input = input("Enter language you want string to convert to (short representation(en,hi,cs)): ")
tts = gTTS(text=text_input, lang=lang_input)
tts.save("audio_file.mp3")
os.system("audio_file.mp3")
