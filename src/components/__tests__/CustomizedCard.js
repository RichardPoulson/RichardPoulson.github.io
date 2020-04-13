/**
 * @see {@link https://reactjs.org/docs/test-renderer.html}
 * @see {@link https://testing-library.com/docs/dom-testing-library/api-queries}
 */
import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Avatar } from '@material-ui/core';

import CustomizedCard from '../CustomizedCard'

test('Attributes are being set by props.', () => {
  const avatarText = 'Avater Text'
  const headerValue = 'Header'
  const subheaderValue = 'Subheader'
  const summaryValue = 'Summary'
  const detailsValue = ["Details 1","Details 2","Details 3"]
  const listValue = ['Item 1','Item 2','Item 3']
  const raisedValue = true
  
  const { container } = render(
    <CustomizedCard
      avatar={<Avatar>{avatarText}</Avatar>}
      header={headerValue}
      subheader={subheaderValue}
      summary={summaryValue}
      details={detailsValue}
      list={listValue}
      raised={raisedValue}
    />
  )

  expect(container.getElementsByClassName('MuiCard-root CustomizedCard-root-1').length).toBe(1)
  const card = container.getElementsByClassName('MuiCard-root CustomizedCard-root-1').item(0)

  expect(card.getElementsByClassName('MuiCardHeader-root').length).toBe(1)
  const headerRoot = card.getElementsByClassName('MuiCardHeader-root').item(0)

  expect(headerRoot.getElementsByClassName('MuiCardHeader-avatar').length).toBe(1)
  const avatar = headerRoot.getElementsByClassName('MuiCardHeader-avatar').item(0)
  expect(avatar.getElementsByClassName('MuiAvatar-root').length).toBe(1)
  expect(avatar.getElementsByClassName('MuiAvatar-root').item(0).textContent).toBe(avatarText)

  expect(headerRoot.getElementsByClassName('MuiCardHeader-content').length).toBe(1)
  const header = headerRoot.getElementsByClassName('MuiCardHeader-content').item(0)
  expect(header.getElementsByClassName('MuiCardHeader-title').length).toBe(1)
  expect(header.getElementsByClassName('MuiCardHeader-title').item(0).textContent).toBe(headerValue)
  expect(header.getElementsByClassName('MuiCardHeader-subheader').length).toBe(1)
  expect(header.getElementsByClassName('MuiCardHeader-subheader').item(0).textContent).toBe(subheaderValue)

  expect(card.getElementsByClassName('MuiCardContent-root').length).toBe(1)
  const content = card.getElementsByClassName('MuiCardContent-root').item(0)
  expect(content.textContent).toBe(summaryValue)

  expect(card.getElementsByClassName('MuiCardActions-root').length).toBe(1)
  const actions = card.getElementsByClassName('MuiCardActions-root').item(0)
  expect(actions.getElementsByClassName('MuiButtonBase-root').length).toBe(1)
})