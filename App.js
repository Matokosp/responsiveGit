import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import Changes from './subscreens/changes'

const bkg = { uri: 'https://www.html.am/templates/downloads/bryantsmith/barrensavannah/background.png' };
const header = { uri: 'https://www.html.am/templates/downloads/bryantsmith/barrensavannah/mainImage.jpg' };

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function App() {

  return (
    <Changes/>
  )
}

const styles = StyleSheet.create({
  
});
