const sorted = [];

function merge(list, left, mid, right) {
  let i, j, k, l;
  i = left;
  j = mid + 1;
  k = left;

  while (i <= mid && j <= right) {
    if (list[i] <= list[j]) {
      sorted[k++] = list[i++];
    } else {
      sorted[k++] = list[j++];
    }
  }

  if (i > mid) {
    for (l = j; l <= right; l++) {
      sorted[k++] = list[l];
    }
  } else {
    for (l = i; l <= mid; l++) {
      sorted[k++] = list[l];
    }
  }

  for (l = left; l <= right; l++) {
    list[l] = sorted[l];
  }
}

function mergeSort(list, left, right) {
  let mid;

  if (left < right) {
    mid = (left + right) / 2;
    mergeSort(list, left, mid);
    mergeSort(list, mid + 1, right);
    merge(list, left, mid, right);
  }
}

// test
const array = [27, 10, 12, 20, 25, 13, 15, 22];
mergeSort(array, 0, 7);
