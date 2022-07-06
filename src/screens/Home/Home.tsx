import * as React from 'react';
import { View, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Header, Input, PasswordItem, Title } from '@components';
import CommonStyles from '@theme/common';
import { passwords } from '@actions';

interface HomeProps {}

function Home({}: HomeProps) {
  const [data, setData] = React.useState<PasswordRecord[]>([]);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    async function getData() {
      const newData = await passwords.getPasswords();
      setData(newData);
    }

    getData();
  }, [search]);

  return (
    <ScrollView
      style={[
        CommonStyles.flexOne,
        CommonStyles.padding,
        CommonStyles.whiteBackground,
        CommonStyles.marginBottomLarge
      ]}>
      <Header />
      <Input
        placeholder="Search"
        value={search}
        onChangeText={text => {
          setSearch(text);
        }}
        iconLeft={<Feather name="search" size={20} color="#999" />}
      />
      <Title title="Passwords" style={CommonStyles.marginTopLarge} />
      <View style={CommonStyles.marginTopLarge} />
      {data.map(item => (
        <PasswordItem item={item} />
      ))}
      <View style={CommonStyles.marginTopLarge} />
    </ScrollView>
  );
}

export default Home;
