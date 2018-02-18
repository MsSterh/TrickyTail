import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

import fox7 from '../../images/fox/f7.png'

export default class Page7 extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick } = this.props

    return (
      <View style={styles.containerView}>
        <Text style={styles.title}>
          Уффф...
        </Text>
        <Text style={styles.paragraph}>
          1.2 килограмма на мой-то рост... ох объелся - так объелся! Аж дурно! А не откроешь ли окошечко, любезный друг? Подышать охота. Ан нет, лучше закрой и включи увлажнитель, от него тоже прохлада идет. Или лучше кондиционер.
        </Text>
        <Text style={styles.paragraph}>
          Не знаю, выбери что-нибудь для меня от перегрева.
          Да поторапливайся, а то мне так худо... что могу не успеть тебе подарочек вернуть.
        </Text>
        <View style={styles.foxImg}>
          <Image
            source={fox7}
            style={styles.fox7}
          />
        </View>

        <Input
          onSubmitText={onClick}
        />
        <Button
          text="Нашёл!"
          onPress={onClick}
        />

        <Hint
          count="1"
          text="На улице такая холодина, что я бы все-таки кондиционер включил."
        />
        <Hint
          count="2"
          text="Кажется, он сломался, не проверишь ли что с ним?"
        />
      </View>
    )
  }
}
