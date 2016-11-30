window.addEventListener('tizenhwkey', function onTizenHwKey(e) {
            if (e.keyName === 'back') {
                try {
                    tizen.application.getCurrentApplication().exit();
                } 
                catch (err) {
                    console.log('Error: ', err);
                }
            }
        });

