import * as React from 'react'

import { Octicon, OcticonSymbol } from '../octicons'
import { HighlightText } from '../lib/highlight-text'
import { Branch } from '../../models/branch'

interface ICompareBranchListItemProps {
  readonly branch: Branch

  /** Specifies whether this item is currently selected */
  readonly isCurrentBranch: boolean

  /** The characters in the branch name to highlight */
  readonly matches: ReadonlyArray<number>

  readonly ahead: number

  readonly behind: number
}

export class CompareBranchListItem extends React.Component<
  ICompareBranchListItemProps,
  {}
> {
  public constructor(props: ICompareBranchListItemProps) {
    super(props)

    this.state = {
      compareResult: null,
    }
  }

  public render() {
    const isCurrentBranch = this.props.isCurrentBranch
    const branch = this.props.branch
    const icon = isCurrentBranch ? OcticonSymbol.check : OcticonSymbol.gitBranch

    return (
      <div className="branches-list-item">
        <Octicon className="icon" symbol={icon} />
        <div className="name" title={branch.name}>
          <HighlightText text={branch.name} highlight={this.props.matches} />
        </div>
        <div className="branch-commit-counter">
          {this.props.behind}
          <Octicon className="icon" symbol={OcticonSymbol.arrowDown} />
          {this.props.ahead}
          <Octicon className="icon" symbol={OcticonSymbol.arrowUp} />
        </div>
      </div>
    )
  }
}
