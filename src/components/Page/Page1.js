import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

import fox1 from '../../images/fox/f1.png'

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
          Ну значит так, практиковался я давеча в стихосложении и сочинил кое-что. Слушай:
        </Text>

        <View style={styles.foxImg}>
          <Image
            source={fox1}
            style={styles.fox1}
          />
        </View>

        <Text style={styles.paragraph}>
          "В комнате было два стула.{'\n'}
          Они были как братья,{'\n'}
          Один другого краше.{'\n'}
          Второй правда скрипучей.
        </Text>

        <Text style={styles.paragraph}>
          И как-то в дом явилась{'\n'}
          Ещё одна машина.{'\n'}
          Ее боялись стулья{'\n'}
          И прятались на стол.
        </Text>

        <Text style={styles.paragraph}>
          Когда ты станешь страшным{'\n'}
          Как белая машина,{'\n'}
          Тебе откроет тайну{'\n'}
          Один из седоков."
        </Text>

        <Text style={styles.paragraph}>
          Угадывай, не торопись. Если совсем сложно, дам тебе несколько подсказок. Только смотри, пользуйся ими аккуратно. С каждой подсказкой я заберу кусочек твоего подарка себе!
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
          text="Ну в стихотворении достаточно ясно указано, что есть два стула. А вот над разгадкой странной белой машины тебе стоит подумать."
        />
        <Hint
          count="2"
          text="Машина эта - пылесос. Советую тебе воспроизвести такие события, чтобы стулья снова испугались и забрались на стол!"
        />
      </View>
    )
  }
}
