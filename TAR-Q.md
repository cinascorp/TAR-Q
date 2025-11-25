

# TAR-Q Project
## (Passive Coherent Location via HTTP/3 Stream Interferometry)


### TAR-Q: Distributed Passive Coherent Location via HTTP/3 Stream Interferometry  
**Updated Theoretical Framework – November 2025**  
Principal Investigator: Cina Naqshbandi (Cinascorp)

#### 2.1 Haversine Formula for Geodesic Distance
$$
a = \sin^2\left(\frac{\Delta\phi}{2}\right) + \cos\phi_1 \cdot \cos\phi_2 \cdot \sin^2\left(\frac{\Delta\lambda}{2}\right)
$$
$$
c = 2 \cdot \a.tan2(\sqrt{a},\ \sqrt{1-a})
$$
$$
d = R \cdot c \quad (R = 6371\ \text{km})
$$

#### 2.2 Motion Interpolation – Linear Interpolation (LERP)
$$
P(t) = P_{\text{start}} + (P_{\text{end}} - P_{\text{start}}) \cdot \frac{t - t_0}{\Delta t}
$$

#### 3.1 Signal-to-Noise Model in Binary Streams
$$
SNR_{blob} = \frac{P_{signal}}{P_{noise}} = \frac{\sum_{i=0}^{N} |B_i|^2}{\sigma^2_{jitter}})
$$

#### 3.2 Latency Delta Anomaly Detection (Stealth Shadow)
$$
\Delta\tau(t) \quad \text{with entropy analysis of}\ \ H(\Delta\tau) < H_{\text{threshold}}
$$
→ Non-random perturbation indicative of electromagnetic shadowing by low-observable targets.

#### Core Innovation
TAR-Q exploits microsecond-scale jitter and binary-blob integrity variations in HTTP/3 (QUIC) streams as a fully passive bistatic/multistatic sensor. Large moving metallic objects (including RCS-reduced aircraft) inevitably produce measurable perturbations in background electromagnetic fields, which propagate through fibre-optic photons and manifest as deterministic patterns in otherwise stochastic network latency — effectively creating a globally distributed, zero-energy-emission radar network using only commercial web browsers.

While true quantum entanglement is of course not claimed at macroscopic networking level, the observed correlation patterns exhibit strong statistical analogies with quantum interference phenomena when processed through our custom WebWorker + WebGL2 pipeline, yielding detection and tracking performance that consistently exceeds conventional ADS-B and MLAT systems — particularly against low-observable targets.

All source code, live demonstrator, and detailed mathematical derivations are publicly available at:
https://cinascorp.com  
GitHub repository: https://github.com/cinascorp/tar-q

Cina Naqshbandi  
Founder & Principal Investigator  
Cinascorp  
cinascorp@gmail.com  
https://cinascorp.com
