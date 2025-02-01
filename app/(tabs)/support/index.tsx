import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { List, SegmentedButtons } from 'react-native-paper'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const index = () => {

    const [value, setValue] = React.useState('');
    const { top } = useSafeAreaInsets()


    return (

        <ScrollView>

            <Text className='text-slate-500 text-3xl leading-8 font-bold my-14 text-center'>Hello, How can we help?</Text>

            <View className='mt-3 mx-3'>

                <SegmentedButtons
                    value={value}
                    onValueChange={setValue}
                    buttons={[
                        {
                            value: 'FAQ',
                            label: 'FAQ',
                        },
                        {
                            value: 'Assistant',
                            label: 'Assistant',
                        },
                    ]}


                />
            </View>

            {value == "FAQ" &&
                <View className='mx-3 my-3'>

                    <List.AccordionGroup>
                        <List.Accordion title="How to use CAFE FINDER APP?" id="1">
                            <List.Item title="Finding Cafes:" description=" Use the search bar, browse the map, and filter results." />
                            <List.Item title="Viewing Cafe Details:" description="Tap a listing for details, photos, menus, and directions." />
                            <List.Item title="Saving Favorite Cafes:" description="Create an account and tap the heart icon." />
                        </List.Accordion>

                        <List.Accordion title="How much does it cost to use the App?" id="2">
                            <List.Item title="App Usage:" description="Currently free." />
                            <List.Item title="In-App Purchases:" description="Optional premium features may be offered in the future." />
                        </List.Accordion>

                        <List.Accordion title="How to contact support?" id="3">
                            <List.Item title="Email Support:" description="support@cafefinder.com" />
                            <List.Item title="In-App Feedback:" description="Available through the app's settings menu." />
                        </List.Accordion>

                        <List.Accordion title="How can I reset my password if I forget it?" id="4">
                            <List.Item title="Password Reset:" description="Tap 'Forgot Password' on the login screen and follow the instructions." />
                        </List.Accordion>

                        <List.Accordion title="Are there any privacy or data security measures in place?" id="5">
                            <List.Item title="Data Privacy:" description="See our privacy policy at [link to privacy policy]." />
                            <List.Item title="Data Security:" description="We use industry-standard security measures." />
                        </List.Accordion>

                        <List.Accordion title="Can I customize settings within the application?" id="6">
                            <List.Item title="App Setting" description="App Settings: Customize notifications, filters, and display options in the settings menu." />
                        </List.Accordion>

                        <List.Accordion title="How can I delete my account?" id="7">
                            <List.Item title="Account Deletion:" description=" Go to the app settings and select 'Delete Account'." />
                        </List.Accordion>
                    </List.AccordionGroup>
                </View> 
            }


        </ScrollView>









    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

export default index