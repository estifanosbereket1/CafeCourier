// import { useAllergypagination, useFetchAllergies } from '@/api/api.allergy';
// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { Chip } from 'react-native-paper';

// const AllergySelector = () => {
//     const [selectedAllergies, setSelectedAllergies] = useState<any>([]);

//     // const allergies = ['Peanuts', 'Shellfish', 'Dairy', 'Gluten', 'Eggs'];

//     const [queryParams, setQueryParams] = useState<Record<string, any>>();
//     // const [item, setItem] = useState<IAccount | null>(null);
//     const { page, pages, size, setPage, setSize } =
//         useAllergypagination(queryParams);

//     const { data } = useFetchAllergies(
//         page,
//         size,
//         queryParams
//     )



//     console.log(data)

//     const handleChipPress = (allergy: any) => {
//         setSelectedAllergies((prevSelected: any) =>
//             prevSelected.includes(allergy)
//                 ? prevSelected.filter((item: any) => item !== allergy)
//                 : [...prevSelected, allergy]
//         );
//     };

//     return (
//         <View>
//             <Text>Select your allergies:</Text>
//             <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//                 {data && data.map((allergy) => (
//                     <Chip
//                         key={allergy.name}
//                         mode="outlined"
//                         selected={selectedAllergies.includes(allergy.id)}
//                         onPress={() => handleChipPress(allergy.id)}
//                         // style={{ margin: 4 }}
//                         style={{
//                             margin: 4,
//                             borderColor: selectedAllergies.includes(allergy.id) ? 'orange' : 'gray',
//                         }}
//                         textStyle={{
//                             color: selectedAllergies.includes(allergy.id) ? 'orange' : 'black',
//                         }}
//                         selectedColor="orange"
//                     >
//                         {allergy.name}
//                     </Chip>
//                 ))}
//             </View>
//             <Text>Selected Allergies: {selectedAllergies.join(', ')}</Text>
//         </View>
//     );
// };

// export default AllergySelector;


import { useAllergypagination, useFetchAllergies } from '@/api/api.allergy';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Chip } from 'react-native-paper';
import { Controller } from 'react-hook-form';

const AllergySelector = ({ control }:any) => {
    const [queryParams, setQueryParams] = useState<Record<string, any>>();
    const { page, pages, size, setPage, setSize } = useAllergypagination(queryParams);
    const { data } = useFetchAllergies(page, size, queryParams);

    return (
        <Controller
            control={control}
            name="allergies"
            render={({ field: { onChange, value } }) => {
                const handleChipPress = (allergyId: Number) => {
                    const newAllergies = value?.includes(allergyId)
                        ? value.filter((id:Number) => id !== allergyId)
                        : [...(value || []), allergyId];

                    onChange(newAllergies);
                };

                return (
                    <View>
                        <Text>Select your allergies:</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {data && data.map((allergy) => (
                                <Chip
                                    key={allergy.name}
                                    mode="outlined"
                                    selected={value?.includes(allergy.id)}
                                    onPress={() => handleChipPress(allergy.id)}
                                    style={{
                                        margin: 4,
                                        borderColor: value?.includes(allergy.id) ? 'orange' : 'gray',
                                    }}
                                    textStyle={{
                                        color: value?.includes(allergy.id) ? 'orange' : 'black',
                                    }}
                                >
                                    {allergy.name}
                                </Chip>
                            ))}
                        </View>
                    </View>
                );
            }}
        />
    );
};

export default AllergySelector;
