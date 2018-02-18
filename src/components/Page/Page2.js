import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

import fox2 from '../../images/fox/f2.png'

export default class Page2 extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick } = this.props

    return (
      <View style={styles.containerView}>
        <Text style={styles.title}>
          Вот как новость...
        </Text>
        <Text style={styles.paragraph}>
          Даже не знаю, как ты будешь теперь сидеть на этом стуле. Я бы на твоём месте задумался насчет этих двоих...
        </Text>
        <Text style={styles.paragraph}>
          Ну ладно. Как тебе мой стихотворный слог?)) Почти Пушкин? Считаешь? Только аккуратнее выбирай мне похвалы, а то сам знаешь, подарочек всё ещё у меня. И я тебя не проверил на нюх. Это была только разминка.
        </Text>
        <View style={styles.foxImg}>
          <Image
            source={fox2}
            style={styles.fox2}
          />
        </View>
        <Text style={styles.paragraph}>
          А ну, скажи, сколько светил в твоём маленьком мирке?
        </Text>

        <Input
          onSubmitText={onClick}
        />
        <Button
          text="Я посчитал все!"
          onPress={onClick}
        />

        <Hint
          count="1"
          text="Лампочек сколько."
        />
        <Hint
          count="2"
          text="Ну лампочек у тебя, таких чтобы БЛЫМ - и горят, или не горят, если не БЛЫМ. В общем, считай все, что на своих местах. И если включить, то могли бы светить =)"
        />
        <Hint
          count="3"
          text="Все - значит все, даже если надо заглянуть в самое тёмное место, особенно на кухне. Думай и ищи. Циферку вводи!"
        />
      </View>
    )
  }
}
