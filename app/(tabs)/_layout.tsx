import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Tabs } from 'expo-router'
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'

const Tabslayout = () => {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Tabs
              screenOptions={{
                  tabBarActiveTintColor: "#F56606",

                  headerShown: false,
                  tabBarStyle: {
                      backgroundColor: 'white',

                  },
                  tabBarButton: (props: any) => (
                      <TouchableOpacity
                          {...props}
                          activeOpacity={1}
                          style={{ flex: 1, alignItems: "center" }}
                      />
                  ),

              }}
          >
              <Tabs.Screen
                  name="support"
                  options={{
                      title: "Support",
                      tabBarStyle: { elevation: 0, shadowOpacity: 0 },
                      tabBarIconStyle: { backgroundColor: 'transparent' },
                      tabBarActiveTintColor: '#F56606',

                      tabBarIcon: ({ color }) => (
                          <TouchableOpacity activeOpacity={1}>
                              <MaterialIcons name="support-agent" size={24} color={color} />

                          </TouchableOpacity>
                      ),
                      tabBarLabel: ({ color }) => <Text style={{ fontSize: 10, color: color }} allowFontScaling={false}>Support</Text>
                  }}
              />

              <Tabs.Screen
                  name="search"

                  options={{
                      title: "Search",

                      tabBarStyle: { elevation: 0, shadowOpacity: 0 },
                      tabBarIconStyle: { backgroundColor: 'transparent' },
                      tabBarActiveTintColor: '#F56606',

                      tabBarIcon: ({ color }) => (
                          <TouchableOpacity activeOpacity={1}>
                              <AntDesign name="search1" size={24} color={color} />
                          </TouchableOpacity>

                      ),
                      tabBarLabel: ({ color }) => <Text allowFontScaling={false} style={{ fontSize: 10, color: color }}>Search</Text>,

                  }}


              />
              <Tabs.Screen
                  name="home"
                  options={{
                      title: "Home",
                      tabBarStyle: { elevation: 0, shadowOpacity: 0 },
                      tabBarIconStyle: { backgroundColor: 'transparent' },
                      tabBarActiveTintColor: '#F56606',
                      tabBarIcon: ({ color }) => (
                          <TouchableOpacity activeOpacity={1}>
                              <Feather name="home" size={24} color={color} />
                          </TouchableOpacity>
                      ),
                      tabBarLabel: ({ color }) => <Text allowFontScaling={false} style={{ fontSize: 10, color: color }}>Home</Text>
                  }}
              />
              <Tabs.Screen
                  name="favourites"
                  options={{
                      title: "Favorites",
                      tabBarStyle: { elevation: 0, shadowOpacity: 0 },
                      tabBarIconStyle: { backgroundColor: 'transparent' },
                      tabBarActiveTintColor: '#F56606',
                      tabBarIcon: ({ color }) => (
                          <TouchableOpacity activeOpacity={1}>
                              <AntDesign name="hearto" size={24} color={color} />

                          </TouchableOpacity>
                      ),
                      tabBarLabel: ({ color }) => <Text allowFontScaling={false} style={{ fontSize: 10, color: color }}>Favorites</Text>
                  }}
              />
              <Tabs.Screen
                  name="profile"
                  options={{
                      title: "Profile",
                      tabBarStyle: { elevation: 0, shadowOpacity: 0 },
                      tabBarIconStyle: { backgroundColor: 'transparent' },
                      tabBarActiveTintColor: '#F56606',
                      tabBarIcon: ({ color }) => (
                          <TouchableOpacity activeOpacity={1}>
                              <AntDesign name="user" size={24} color={color} />
                          </TouchableOpacity>
                      ),
                      tabBarLabel: ({ color }) => <Text allowFontScaling={false} style={{ fontSize: 10, color: color }}>Profile</Text>
                  }}
              />
          </Tabs>
      </GestureHandlerRootView>
  )
}

export default Tabslayout