import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

import fox4 from '../../images/fox/f4.png'

export default class Page4 extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick } = this.props

    return (
      <View style={styles.containerView}>
        <Text style={styles.title}>
          Ууу-упс...
        </Text>
        <Text style={styles.paragraph}>
          Да, совсем забыл сказать, пока ты там воображал себя с кубком в руках, я сходил в ваш нужник. Ну и... как бы это, по своим делам. Зверёк я маленький, много не наследил, я бы и сам за собой поухаживал, но у меня лапки ^_^ Не мог бы ты прибраться за мной?
        </Text>
        <View style={styles.foxImg}>
          <Image
            source={fox4}
            style={styles.fox4}
          />
        </View>

        <Input
          onSubmitText={onClick}
        />
        <Button
          text="Я прибрал"
          onPress={onClick}
        />

        <Hint
          count="1"
          text="Я немножко накакал >_<"
        />
        <Hint
          count="2"
          text="И хотел бумагой всё-превсё вытереть, но у меня лапки  =("
        />
      </View>
    )
  }
}
