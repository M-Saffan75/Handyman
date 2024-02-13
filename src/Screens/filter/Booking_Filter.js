import { COLOURS } from '../../ThemeColour/Theme';
import React, { useContext, useState } from 'react';
import styles from '../../css/filter/bookingfilter';
import themeContext from '../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, StatusBar, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';


const Booking_Filter = () => {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const [filterValue, setFilterValue] = useState([30, 70]);
    const [filterValue_one, setFilterValue_one] = useState([5, 10]);

    const onValuesChange = values => {
        setFilterValue(values);
    };

    const onValuesChange_one = values_one => {
        setFilterValue_one(values_one);
    };

    return (
        <>
            {/* <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} /> */}
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>
                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

                    <View>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>FIlter</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.see_categorie}>
                            <Text style={[styles.categories, { color: theme.colorblue }]}>name</Text>
                            <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]}>
                                <Text style={[styles.see, { color: theme.colorblue }]}>reset all</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.categorie_name, { color: COLOURS.grey }]}>property name</Text>
                    </View>

                    <View>
                        <View style={styles.see_categorie}>
                            <Text style={[styles.categories, { color: theme.colorblue }]}>stars</Text>
                            <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]}>
                                <Text style={[styles.see, { color: theme.colorblue }]}>reset all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.prvder_rat_one}>
                            <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                            <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                            <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                            <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                            <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                        </View>
                    </View>


                    <View style={styles.rating_min_area_container}>
                        <View style={styles.see_categorie}>
                            <Text style={[styles.categories, { color: theme.colorblue }]}>rating</Text>
                            <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]}>
                                <Text style={[styles.see, { color: theme.colorblue }]}>reset all</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.filter_area}>

                            <Text style={[styles.betwn_text, { color: theme.colorwhite }]}>between</Text>

                            <View style={styles.min_bg}>
                                <Text style={styles.min_text}>{`${filterValue_one[0]}` + ' .00'}</Text>
                            </View>

                            <Text style={[styles.min_and_max, { color: theme.colorwhite }]}>&</Text>

                            <View style={styles.min_bg}>
                                <Text style={styles.min_text}>{`${filterValue_one[1]}` + ' .00'}</Text>
                            </View>
                        </View>
                        <View style={styles.fliter_bg}>
                            <MultiSlider
                                values={filterValue_one}
                                sliderLength={320}
                                smoothSnapped={true}
                                onValuesChange={onValuesChange_one}
                                min={1}
                                max={5}
                                step={1}
                                allowOverlap
                                snapped
                                markerStyle={[styles.marker, { borderColor: COLOURS.blue, backgroundColor: COLOURS.white }]}
                                trackStyle={styles.track}
                                selectedStyle={styles.selected_raw}
                            />
                        </View>
                    </View>

                    <View style={styles.rating_min_area_container}>
                        <View style={styles.see_categorie}>
                            <Text style={[styles.categories, { color: theme.colorblue }]}>price</Text>
                            <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]}>
                                <Text style={[styles.see, { color: theme.colorblue }]}>reset all</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.filter_area}>

                            <Text style={[styles.betwn_text, { color: theme.colorwhite }]}>between</Text>

                            <View style={styles.min_bg}>
                                <Text style={styles.min_text}>{`${filterValue[0]}`}</Text>
                            </View>

                            <Text style={[styles.min_and_max, { color: theme.colorwhite }]}>&</Text>

                            <View style={styles.min_bg}>
                                <Text style={styles.min_text}>{`${filterValue[1]}`}</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.fliter_bg}>
                        <MultiSlider
                            values={filterValue}
                            sliderLength={320}
                            smoothSnapped={true}
                            onValuesChange={onValuesChange}
                            min={100}
                            max={1200}
                            step={1}
                            allowOverlap
                            snapped
                            markerStyle={[styles.marker, { borderColor: COLOURS.blue, backgroundColor: COLOURS.white }]}
                            trackStyle={styles.track}
                            selectedStyle={styles.selected_raw}
                        />
                    </View>
                    {/*  */}
                    <View style={styles.btn_center}>
                        <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                            <Text style={styles.btn_text}>apply now</Text>
                        </TouchableOpacity>
                    </View>
                    {/*  */}
                </View>
            </SafeAreaView>
        </>
    )
}

export default Booking_Filter