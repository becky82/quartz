# Quartz: a Latin square autotopism game

Quartz is a game where the user finds a Latin square satisfying a given symmetry property (an autotopism).

From this perspective, a Latin square is equivalent to a quasigroup, hence "Quartz", approximately short for <b>qu</b>asigroup <b>aut</b>omorphism<b>s</b>.

When you click a cell, it changes its symbol to the next symbol that doesn't violate the necessary conditions (the LCM conditions) for a Latin square to have an autotopism.

At the moment, the game is in development, so don't expect too much.

Function modifications needed:

<ul style="list-style-type:circle">
  <li>Selectable dimension size n.</li>
  <li>Random puzzle of size n.</li>
  <li>Identify if solution is known.</li>
  <li>User can "give up" and access a known solution.</li>
  <li>Automatic upload when a solution is found.</li>
  <li>User can enter their name for attribution of their solution.</li>
  <li>Keep track of the "best known" solution.</li>
</ul>

Appearance modifications:

<ul style="list-style-type:circle">
  <li>Row and column separations to indicate the row and column permutations in the autotopism.</li>
  <li>Leading symbols are always highlighted; different leading symbols with different colors.</li>
  <li>When hovering over a cell, the orbit it belongs to is highlighted.</li>
  <li>Change the cells from HTML buttons to something that looks nice.</li>
  <li>Improve error counting.</li>
</ul>

To make the game more fun:

<ul style="list-style-type:circle">
  <li>Keep a statistics table (no. clicks, time spent on puzzle, etc.).</li>
  <li>Add some "achievements".</li>
  <li>Add sounds for hover, click.</li>
</ul>

<i>Rebecca J. Stones</i>
