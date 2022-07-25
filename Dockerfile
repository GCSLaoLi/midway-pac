FROM python
RUN pip install -U genpac
RUN genpac --format pac  --pac-proxy "SOCKS5 127.0.0.1:1080"