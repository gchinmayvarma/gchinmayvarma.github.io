import os
l = []
for file in os.listdir("."):
    if file.endswith('.gif'):
        l.append(file)
print(l)
