import numpy as np
import matplotlib.pyplot as plt
import math
import cmath

N = [1, 3, 7, 19, 43, 79]
option = 5
t = np.arange(- np.pi, np.pi, 0.01)

###################################

def component(k, t):
    ak = np.sinc(k / 2) / 2
    exp = cmath.exp(complex(0, np.pi * k / 2 * t))
    return ak * exp

def x(N, t):
    fs = 0
    for k in range(-N, N + 1):
        fs += component(k, t)
    return fs

y = []
max = 0
for i in range(len(t)):
    val = x(N[option], t[i]).real
    if val > max:
        max = val
    y.append(val)
print((max - 1) * 100)

###################################

plt.plot(t, y, 'g')
plt.title('N = ' + str(N[option]))
plt.grid()
plt.show()
