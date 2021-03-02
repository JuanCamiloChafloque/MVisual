#pragma once

#include "hello_world.hpp"

namespace helloworld
{
    class HelloWorldImpl: public helloworld::HelloWorld{
        public:
        //Constructor
        HelloWorldImpl();
        //The method that generates the string
        std::string get_hello_world();
    };
} // namespace helloworl
