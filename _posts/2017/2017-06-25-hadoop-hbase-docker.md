---
published: true
layout: post
category: Bigdata
tags:
  - Hbase
  - Docker
  - Hadoop
---

# 单节点基于Docker快速虚拟部署Hbase和Hadoop集群

采用krejcmat/hadoop-hbase-docker项目成果，感谢原作者

######相关产品版本
| system          | version    | 
| ----------------|:----------:| 
| HBase           | 1.2.4      |

######文件目录 
```
$ tree

.
├── hadoop-hbase-base
│   ├── Dockerfile
│   └── files
│       ├── bashrc
│       └── hbase-env.sh
├── hadoop-hbase-master
│   ├── Dockerfile
│   └── files
│       ├── hadoop
│       │   ├── configure-slaves.sh
│       │   ├── core-site.xml
│       │   ├── hdfs-site.xml
│       │   ├── mapred-site.xml
│       │   ├── run-wordcount.sh
│       │   ├── start-hadoop.sh
│       │   ├── start-ssh-serf.sh
│       │   ├── stop-hadoop.sh
│       │   └── yarn-site.xml
│       └── hbase
│           ├── hbase-site.xml
│           ├── start-hbase.sh
│           └── stop-hbase.sh
├── hadoop-hbase-slave
│   ├── Dockerfile
│   └── files
│       ├── hadoop
│       │   ├── core-site.xml
│       │   ├── hdfs-site.xml
│       │   ├── mapred-site.xml
│       │   ├── start-ssh-serf.sh
│       │   └── yarn-site.xml
│       └── hbase
│           └── hbase-site.xml
├── README.md
├── resize-cluster.sh
├── build-image.sh
└── start-container.sh

```

###Usage
####1] Clone git repository
```
$ git clone https://github.com/krejcmat/hadoop-hbase-docker.git
$ cd hadoop-hbase-docker
```

####2] Get docker images 获得Docker镜像
Two options how to get images are available. By pulling images directly from Docker official repository or build from Dockerfiles and sources files(see Dockerfile in each hadoop-hbase-* directory). Builds on DockerHub are automatically created by pull trigger or GitHub trigger after update Dockerfiles. Triggers are setuped for tag:latest. Below is example of stable version krejcmat/hadoop-hbase-<>:0.1. Version krejcmat/hadoop-hbase-<>:latest is compiled on DockerHub from master branche on GitHub.

######a) Download from Docker hub 从Docker Hub 直接Pull
```
$ docker pull krejcmat/hadoop-hbase-master:latest
$ docker pull krejcmat/hadoop-hbase-slave:latest
```


```

######Check images
```bash
root@ubuntu:~# docker images
REPOSITORY                           TAG                                                     IMAGE ID            CREATED             SIZE
krejcmat/hadoop-master               latest                                                  5089e2ba0492        16 months ago       671 MB
krejcmat/hadoop-slave                latest                                                  f41baab63271        16 months ago       671 MB
krejcmat/hadoop-hbase-slave          latest                                                  f7f8427fb25f        16 months ago       1.32 GB
krejcmat/hadoop-hbase-master         latest                                                  f2313bc4bd42        16 months ago       1.32 GB
```


####3] Initialize Hadoop (master and slaves)
For starting Hadoop cluster see documentation of [krejcmat/hadoop-docker](https://github.com/krejcmat/hadoop-docker/blob/master/README.md#3-initialize-hadoop-master-and-slaves).

If Hadoop is runnig go to next step.

####4] Initialize Hbase database and run Hbase shell
######Start HBase
```
$ cd ~
$ ./start-hbase.sh

(hbase(main):001:0>)
```

######Check status
```
(hbase(main):001:0>)$ status

2 servers, 0 dead, 1.0000 average load
```
######Example of creating table and adding some values
```
$ create 'album','label','image'
```
Now you have a table called album, with a label, and an image family. These families are “static” like the columns in the RDBMS world.

Add some data:
```
$ put 'album','label1','label:size','10'
$ put 'album','label1','label:color','255:255:255'
$ put 'album','label1','label:text','Family album'
$ put 'album','label1','image:name','holiday'
$ put 'album','label1','image:source','/tmp/pic1.jpg'
```

Print table album,label1.
```
$get 'album','label1'

COLUMN                                              CELL
image:name                                          timestamp=1454590694743, value=holiday
image:source                                        timestamp=1454590759183, value=/tmp/pic1.jpg
label:color                                         timestamp=1454590554725, value=255:255:255
label:size                                          timestamp=1454590535642, value=10
label:text                                          timestamp=1454590583786, value=Family album
6 row(s) in 0.0320 seconds
```

####5] Control cluster from web UI
######Overview of UI web ports
| web ui           | port       |
| ---------------- |:----------:| 
| Hbase            | 60010      |


######Access from parent computer of docker container
Check IP addres in master container
```
$ ip a

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
4: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP 
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.2/16 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:acff:fe11:2/64 scope link 
       valid_lft forever preferred_lft forever

```
so your IP address is 172.17.0.2

```
$ xdg-open http://172.17.0.2:60010/
```
######Direct access from container(not implemented)
Used Linux distribution is installed without graphical UI. Easiest way is to use another Unix distribution by modifying Dockerfile of hadoop-hbase-dnsmasq and rebuild images. In this case start-container.sh script must be modified. On the line where the master container is created must add parameters for [X forwarding](http://wiki.ros.org/docker/Tutorials/GUI). 


######HBase usage
[python wrapper for HBase rest API](http://blog.cloudera.com/blog/2013/10/hello-starbase-a-python-wrapper-for-the-hbase-rest-api/)

[usage of Java API for Hbase](https://autofei.wordpress.com/2012/04/02/java-example-code-using-hbase-data-model-operations/)

[Hbase shell commands](https://learnhbase.wordpress.com/2013/03/02/hbase-shell-commands/)
