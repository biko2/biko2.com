#!/bin/bash

#
# Copy all module README.md files to documentation folder.
#

list="$(find ../ -name README.md -type f)"

for file in $list; do 

    # Skip home.
    if [[ ( $file == "../docs/README.md") ]]; then
        continue
    fi

    # static_suite readme.md.
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
