import React from 'react'
import styled from 'styled-components'

import { AddColor, Trash } from './../Icons/index'

const AddStopContainer = styled.div`
  position: absolute;
  left: 0;
  top: 10px;
`

const AddDeleteStop = ({
  renderDelete,
  renderDeleteInverted,
  editingStop,
  animationDuration,
  hovered,
  color,
  title
}) => {
  if (renderDelete) {
    return (
      <Trash
        title={title}
        color={color}
        inverted={renderDeleteInverted}
        animationDuration={animationDuration}
      />
    )
  } else if (editingStop) {
    return (
      <AddStopContainer title={title}>
        <AddColor color={color} hovered={hovered} />
      </AddStopContainer>
    )
  } else return null
}

export default AddDeleteStop
