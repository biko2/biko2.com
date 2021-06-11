#!/bin/bash

list="$(find ../ -name README.md -type f)"

for file in $list; do 

    if [[ ( $file == "../docs/README.md") ]]; then
        continue
    fi

    if [[ ( $file == "../README.md") ]]; then
        mkdir -p modules
        cp $file modules
        continue
    fi
 
    dir=$(dirname "${file}")
    dir="${dir//..\//}"

    mkdir -p $dir
    cp $file $dir    
done
