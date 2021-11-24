import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import containersApi from '../../api/containersApi';
import ContainerCard from '../../components/ContainerCard';
import { ContainersInterface } from '../../interfaces/interfaces';

const Component = () => {
    const [containers, setContainers] = useState<[ContainersInterface] | null>(null,);

    const getContainers = async () => {
        const { data } = await containersApi.get<[ContainersInterface]>('/containers',)

        setContainers(data);
    };

    useEffect(() => {
        getContainers();
    }, []);

    const renderContainer = containers?.map((container, index) => {
        return <ContainerCard key={`container-${index}`} container={container} />
    });

    return (
        //Container
        <ScrollView style={{backgroundColor: '#f2f2f2'}}> 
            <StatusBar backgroundColor='#f2f2f2' barStyle="dark-content"/>
            {renderContainer}
        </ScrollView>
        
    )
}

export default Component;
