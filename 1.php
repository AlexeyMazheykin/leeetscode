<?php
function maxProfit ($prices) {

    $sellIndex = 0;
        $byIndex = 0;
        $rest = null;

    for ($i = 0; $i < count($prices) - 1; $i++) {
        $byCur = $i;
        $sellCur = $i + 1;

        if ($rest === null && $prices[$byCur] < $prices[$sellCur]) {
            $rest = $prices[$sellCur] - $prices[$byCur];
            $sellIndex = $sellCur;
            $byIndex = $byCur;
            continue;
        }
        if ($rest !== null) {

            if ($prices[$sellCur] - $prices[$byIndex] >= $rest) {
                $sellIndex = $sellCur;
            }
            if ($prices[$byCur] <= $prices[$byIndex]) {
                $byIndex = $byCur;
            }

            if ($sellIndex > $byIndex) {
                $rest = $prices[$sellIndex] - $prices[$byIndex];
            }
        }

    }
    return $rest ?? 0;
}


$prices = [7,6,4,3,1];
maxProfit($prices);