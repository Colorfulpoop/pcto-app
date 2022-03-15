import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, FlatList, Animated, TouchableOpacity } from 'react-native';
import Onboardingitem from './OnboardingItem';
import NextButton from '../NextButton/NextButton';
import Paginator from '../Paginator/Paginator';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import slides from '../../slides';

export default Onboarding = () => { 
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const navigation = useNavigation();

    const viewableItemsChanged = useRef(({ viewableItems}) => {

        setCurrentIndex(viewableItems[0].index);
    }).current;

     const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

     const scrollTo = () => {
         if (currentIndex < slides.length - 1 ) {
              slidesRef.current.scrollToIndex({index : currentIndex + 1 }) 
         }else {
            navigation.replace("Login")
         }
     };
     
     return (
         <View style={styles.container}>
             
             <View style ={ {flex: 3}}>
                 <FlatList 

                   data={slides}
                   renderItem={({ item }) => <Onboardingitem item={item}/>}
                   horizontal
                   showsHorizontalScrollIndicator={false}
                   pagingEnabled
                   bounces={false}
                   keyExtractor={(item) => item.id}
                   onScroll={Animated.event ([{ nativeEvent : { contentOffset : { x: scrollX}}}],
                    { 
                        useNativeDriver:false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
            Next        viewabilityConfig={viewConfig}
                    ref={slidesRef}

                 />
             </View>

                    <Paginator data = { slides }  scrollX= {scrollX} />   
                    <NextButton  scrollTo={scrollTo}     percentage={(currentIndex + 1 ) * (100/ slides.length)}/>

                    
                 
                    <TouchableOpacity
                      style={{
                         position:'absolute',
                         color:'#FCB500',
                         bottom:700,
                         right: 20,
                         flex: 1,

                         
                      }} 
                      onPress={ () => {navigation.replace("Login") }}
                    >
                        <Text style={styles.salta}>Salta</Text>
                    </TouchableOpacity>

         </View>
     );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#00A3D9',
      justifyContent: 'center',
      alignItems:'center',
  },
  salta: {
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 22,
    textAlign: "center",
    color: "#FCB500"
  }



});