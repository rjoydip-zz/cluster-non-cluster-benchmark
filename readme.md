# cluster-non-cluster-benchmark

A performance test between cluster and non-cluster mode.

## Installation

```
$ git clone 
$ cd cluster-non-cluster-benchmark
$ npm install
$ npm run cluster:dev
$ npm run benchmark
```

## Scripts

- **cluster:dev** - Cluster with `dev` mode
- **cluster:prod** - Cluster with `prod` mode
- **noncluster:dev** - Non Cluster with `dev` mode
- **noncluster:prod** - Non Cluster with `prod` mode
- **benchmark** - Benchmarking

## Benchmark

- Cluster (dev mode)

Minimum `68k`
Maximum `111k`

```
Running 5s test @ http://127.0.0.1:3000
100 connections with 10 pipelining factor

Stat    2.5% 50%  97.5%  99%    Avg     Stdev    Max
Latency 0 ms 0 ms 105 ms 121 ms 4.42 ms 22.51 ms 255.63 ms

Stat      1%      2.5%    50%     97.5%   Avg     Stdev  Min

Req/Sec   18655   18655   22783   23295   22113.6 1755.8 18641

Bytes/Sec 4.07 MB 4.07 MB 4.97 MB 5.08 MB 4.82 MB 383 kB 4.06 MB


Req/Bytes counts sampled once per second.

111k requests in 5s, 24.1 MB read
```

- Non cluster (dev mode)

Minimum `61k`
Maximum `70k`

```
Running 5s test @ http://127.0.0.1:3000
100 connections with 10 pipelining factor

Stat    2.5% 50%  97.5% 99%   Avg     Stdev    Max
Latency 0 ms 0 ms 69 ms 73 ms 6.98 ms 21.05 ms 140.11 ms

Stat      1%      2.5%    50%    97.5%   Avg     Stdev  Min
Req/Sec   13007   13007   14231  14463   14034.4 535.84 13001
Bytes/Sec 2.83 MB 2.83 MB 3.1 MB 3.15 MB 3.06 MB 117 kB 2.83 MB

Req/Bytes counts sampled once per second.

70k requests in 5s, 15.3 MB read
```

## License

MIT © [Joydip Roy](https://github.com/rjoydip)

