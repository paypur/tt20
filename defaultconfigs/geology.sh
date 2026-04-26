#!/bin/bash

awk -F'=' '/vein_size/ { $2 = " " $2 / 2 } { print }' OFS='=' immersivegeology-server.toml > temp && mv temp immersivegeology-server.toml
awk -F'=' '/generation_chance/ { $2 = " " $2 * 2 + 1000 } { print }' OFS='=' immersivegeology-server.toml > temp && mv temp immersivegeology-server.toml
# awk -F'=' '/attempts_per_chunk/ { $2 = " " $2 / 2 } { print }' OFS='=' immersivegeology-server.toml > temp && mv temp immersivegeology-server.toml
