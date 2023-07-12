//This is a project by Brandon Kling
//This is where we import libraries to use in our app
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Text,
  View,
  Pressable,
  ImageBackground,
  Image,
  Button,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Audio, Video } from 'expo-av';
import Constants from 'expo-constants';

function myTestFunction() {
  alert('It Works');
}

//sound for app
function PlayGraveyardSound() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      //creat sound object
      const sound = new Audio.Sound();
      //set properties of the object
      await sound.loadAsync(require('./assets/nightambience.mp3'));
      //controls if the sound loops
      await sound.setIsLoopingAsync(true);
      //set volume
      await sound.setVolumeAsync(0.75);
      //tell our sound object to start playing
      await sound.playAsync(true);
      //unload from memory if you want to stop the sound
      //await sound.unloadAsync();
    } catch (error) {
      console.error(error);
    }
  })();
}
//No one escapes from life alive.
//App is what we thnk of as our main function where the program starts.
//Do not put code comments inside the return area or you will break your app.
//each screen is going to be a simple function
//home screen
function IntroScreen({ navigation }) {
  //background sound
  PlayGraveyardSound();
  //This is the first page you see in my app
  return (
    <ImageBackground
      source={require('./assets/graveyardlightninggif.gif')}
      style={{ width: '100%', height: '100%' }}>
      <View style={{ flex: 1 }}>
        <View style={{}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 50,
              fontWeight: 'bold',
            }}>
            {' '}
            {'\n\n\n\n\n'}Haunted Tours{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Sign Up')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n\n\n\n\n'} Press for more info{' '}
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function SignUp({ navigation }) {
  //This is the email signup page which uses user input for collecting the email
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/HauntedTours.jpg')}
        style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1 }}>
          <View style={{}}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 50,
                fontWeight: 'bold',
              }}>
              {' '}
              {'\n\n\n'}Sign Up for updates below!{'\n'}{' '}
            </Text>
            <TextInput
              value={userName}
              placeholder={'enter Email here'}
              style={{
                textAlign: 'center',
                backgroundColor: 'white',
                color: 'black',
                width: 225,
                height: 50,
                alignSelf: 'center',
              }}
              onChangeText={(userName) => setUserName(userName)}
            />
            <Pressable onPress={() => navigation.navigate('Tour Info')}>
              <Text
                style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
                {'\n\n\n'} Press for Tour Info{' '}
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
  //comments should be safe here.
}
function TourInfo({ navigation }) {
  //This is my info page about what my app contains for the user.
  return (
    <ImageBackground
      source={require('./assets/TourInfo.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 35,
              fontWeight: 'bold',
            }}>
            {'\n\n\n'}Locations on our Tour
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
            {'\n\n'}Through this app you will be able to see many famously
            haunted locations in Arizona. {'\n\n'}We will give you a close and
            personal viewing of each location. {'\n\n'}From Jerome to Tombstone
            you will experience the amazing haunted history of Arizona.
          </Text>
          <Pressable onPress={() => navigation.navigate('Jerome')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Press here to visit Jerome.
            </Text>
            <Image
              source={require('./assets/basementgif.gif')}
              style={{ width: 250, height: 150, alignSelf: 'center' }}></Image>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function Jerome({ navigation }) {
  //This page has info on Jerome.
  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Jerome
        </Text>
      </View>
        <View style={{ flex: 6, backgroundColor: 'green' }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'red',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            Today, Jerome is known more for its liquid spirits, in
            particular,its award-winning wine; however, it remains one of
            Arizona's most famous ghost towns, and hauntings come with the
            territory. After all, it didn't earn its reputation as the
            "Wickedest Town in the West" without reason. Due to the many people
            that died in Jerome during the wild wild west, it said to be the
            most haunted place in Arizona.
            {'\n'}Today, Jerome is known more for its liquid spirits, in
            particular,its award-winning wine; however, it remains one of
            Arizona's most famous ghost towns, and hauntings come with the
            territory. After all, it didn't earn its reputation as the
            "Wickedest Town in the West" without reason. Due to the many people
            that died in Jerome during the wild wild west, it said to be the
            most haunted place in Arizona.
          </Text>
        </View>
      <View style={{ flex: 3, backgroundColor: 'orange' }}>
        <Button
          title="Click Me"
          onPress={() => navigation.navigate('Tombstone')}></Button>
      </View>
    </View>
  );
  //comments should be safe here.
}
function Tombstone({ navigation }) {
  //This page has info on Tombstone.
  return (
    <ImageBackground
      source={require('./assets/crosscrowgif.gif')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
            }}>
            {'\n\n\n'}Tombstone
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
            {'\n\n'}Boothill Graveyard is the final resting place for many of
            Tombstone's most well-known people, Boothill Graveyard is said to be
            the most haunted cemetery in all of Tombstone.
          </Text>
          <Pressable onPress={() => navigation.navigate('Tucson')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Press here to visit Tucson.
            </Text>
            <Image
              source={require('./assets/tombstonegravesite.jpg')}
              style={{ width: '100%', height: '50%' }}></Image>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function Tucson({ navigation }) {
  //This page has info on Tucson.
  return (
    <ImageBackground
      source={require('./assets/Tucson.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
            }}>
            {'\n\n\n'}Tucson
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
            {'\n\n'}In downtown Tucson, Hotel Congress, built 1919, is best
            known for the capture of the notorious Dillinger gang. Although the
            gangster John Dillinger isn't one of them, ghosts do seem to roam
            the hotel, including a woman who smells of roses and a gentleman who
            peers out the windows of the second floor.
          </Text>
          <Image
            source={require('./assets/tucsonhotelcongress.jpeg')}
            style={{ width: '100%', height: '50%' }}></Image>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}

//create nav component
const Stack = createStackNavigator();

//This will take care of all our Navigation.
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Haunted Tours">
        <Stack.Screen name="Haunted Tours" component={IntroScreen} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Tour Info" component={TourInfo} />
        <Stack.Screen name="Jerome" component={Jerome} />
        <Stack.Screen name="Tombstone" component={Tombstone} />
        <Stack.Screen name="Tucson" component={Tucson} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// <View
//             style={{
//               flex: 2,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Video
//               source={require('./assets/TalesFromtheCrypt.mp4')}
//               rate={1.0}
//               Volume={1.0}
//               isMuted={false}
//               resizeMode="contain"
//               shouldPlay
//               style={{ width: '100%', height: '100%' }}
//   />
// </View>

// <Pressable onPress={() => navigation.navigate('Tombstone')}>
//             <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
//               {'\n\n'} Press here to visit Tombstone.
//             </Text>
//             <Image
//               source={require('./assets/JeromeGrandHotel.webp')}
//               style={{ width: '100%', height: '50%' }}></Image>
//           </Pressable>