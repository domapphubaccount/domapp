import React from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

export default function Place() {
  return (
    <div>
        <div className="d-flex p-5 justify-content-center">
            <UncontrolledDropdown
                className="me-2"
                direction="start"
            >
                <DropdownToggle
                caret
                color="primary"
                >
                Dropstart
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem header>
                    Header
                </DropdownItem>
                <DropdownItem disabled>
                    Action
                </DropdownItem>
                <DropdownItem>
                    Another Action
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    Another Action
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    </div>
  )
}
