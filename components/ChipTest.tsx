import { useAllergypagination, useFetchAllergies } from '@/api/api.allergy';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Chip } from 'react-native-paper';

const AllergySelector = () => {
    const [selectedAllergies, setSelectedAllergies] = useState<any>([]);

    // const allergies = ['Peanuts', 'Shellfish', 'Dairy', 'Gluten', 'Eggs'];

    const [queryParams, setQueryParams] = useState<Record<string, any>>();
    // const [item, setItem] = useState<IAccount | null>(null);
    const { page, pages, size, setPage, setSize } =
        useAllergypagination(queryParams);

    const { data } = useFetchAllergies(
        page,
        size,
        queryParams
    )



    console.log(data)

    const handleChipPress = (allergy: any) => {
        setSelectedAllergies((prevSelected: any) =>
            prevSelected.includes(allergy)
                ? prevSelected.filter((item: any) => item !== allergy)
                : [...prevSelected, allergy]
        );
    };

    return (
        <View>
            <Text>Select your allergies:</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {data && data.map((allergy) => (
                    <Chip
                        key={allergy.name}
                        mode="outlined"
                        selected={selectedAllergies.includes(allergy.id)}
                        onPress={() => handleChipPress(allergy.id)}
                        style={{ margin: 4 }}
                    >
                        {allergy.name}
                    </Chip>
                ))}
            </View>
            <Text>Selected Allergies: {selectedAllergies.join(', ')}</Text>
        </View>
    );
};

export default AllergySelector;
