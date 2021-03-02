#!/usr/bin/env bash
### Configuration
# Djinni IDL file location
djinni_file="helloworld.djinni"
# C++ namespace for generated src
namespace="helloworld"
# Java package name for generated src
java_package="com.mvisual.helloworld"

### Script
# get base directory
base_dir=$(cd "`dirname "0"`" && pwd)
# get java directory from package name
java_dir=$(echo $java_package | tr . /)
# output directories for generated src
cpp_out="$base_dir/djinni/cpp"
jni_out="$base_dir/djinni/jni"
java_out="$base_dir/djinni/java/$java_dir"
# clean generated src dirs
rm -rf $cpp_out
rm -rf $jni_out
rm -rf $java_out
# execute the djinni command
./node_modules/djinni/src/run \
   --java-out $java_out \
   --java-package $java_package \
   --ident-java-field mFooBar \
   --cpp-out $cpp_out \
   --cpp-namespace $namespace \
   --jni-out $jni_out \
   --ident-jni-class NativeFooBar \
   --ident-jni-file NativeFooBar \
   --idl $djinni_file