import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

export default class Page1 extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick } = this.props

    return (
      <View style={styles.containerView}>
        <Text style={styles.title}>
          Отлично!
        </Text>
        <Text style={styles.paragraph}>
          Ну значит так, практиковался я давеча в стихосложении и сочинил. Слушай:
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.textLine}>
            В комнате было два стула.
          </Text>
          Они были как братья,
          Один другого краше.
          Второй правда скрипучей.
        </Text>

        <Text style={styles.paragraph}>
          И как-то в дом явилась
          Еще одна машина,
          Ее боялись стулья,
          И прятались на стол.
        </Text>

        <Text style={styles.paragraph}>
          Когда ты станешь страшным,
          Как белая машина,
          Тебе откроет тайну
          Один из седоков.
        </Text>

        <Input
          onSubmitText={onClick}
        />
        <Button
          text="Я знаю ответ!"
          onPress={onClick}
        />

        <Hint
          count="1"
          text="Number 1"
        />
        <Hint
          count="2"
          text="Number 2"
        />
      </View>
    )
  }
}
