export const RegistrationForm = () => `<div id="shopRegistration" class="modal">
<div class="modal-dialog">
  <div class="modal-content">
    <form id="registrationForm" method="POST" enctype="multipart/form-data">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Shop Registrierung</h4>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <div class="form-group">
          <label for="usr">Name des Geschäfts</label>
          <input type="text" class="form-control" name="shop_name" required="true">
        </div>
        <div class="form-group">
          <label for="usr">Straße und Hausnummer</label>
          <input type="text" class="form-control" name="shop_street" required="true">
        </div>
        <div class="form-group">
          <label for="usr">PLZ</label>
          <input type="text" class="form-control" name="shop_plz" required="true">
        </div>
        <div class="form-group">
          <label for="usr">Email</label>
          <input type="text" class="form-control" name="shop_email" required="true">
        </div>
        <div class="form-group">
          <label for="usr">Webseite</label>
          <input type="text" class="form-control" name="shop_website">
        </div>
        <div class="form-group">
          <label for="usr">Telefonnummer (Unter der Kund*innen Sie erreichen können)</label>
          <input type="text" class="form-control" name="shop_phone">
        </div>
        <div class="form-group">
          <label for="usr">Telefonische Erreichbarkeit</label>
          <div class="checkbox">
            <ul class="mylist">
            </ul>

          </div>
        </div>
        <hr>
        <div class="form-group">
          <label for="usr">Beschreibung des Geschäfts (3-4 Sätze, optional)</label>
          <textarea class="form-control" rows="3" name="shop_description"
            placeholder="Diese Beschreibung wird Ihrem Shop Profil angefügt."></textarea>
        </div>
        <hr>
        <div class="form-group">
          <label for="usr">Kassensystem/Warenwirtschaftssystem</label>
          <textarea class="form-control" rows="3" name="warenwirtschaftssystem"
            placeholder="Falls ein Warenwirtschaftsprogramm benutzt wird, freuen wir uns über die Information welches, um eine einfache Anbindung an den Online Shop zu ermöglichen."></textarea>
        </div>
        <hr>
        <div class="form-group">
          <label for="usr">Warenkategorien, getrennt durch Komma</label>
          <input type="text" class="form-control" name="shop_categories"
            placeholder="z.B. Tabakwaren, Zeitschriften, Bücher, Getränke" required="true">
        </div>
        <hr>
        <div class="form-group">
          <label for="usr">Versandmöglichkeiten</label>
          <div class="checkbox">
            <label><input type="checkbox" value="" name="pick_up"> Abholung </label> <br>
            <label><input type="checkbox" value="" name="bicycle"> Interesse an Fahrradlieferung </label> <br>
            <label><input type="checkbox" value="" name="postal"> Versand per Post </label>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Weitere Versandmöglichkeit" name="misc_shipping">
            </div>
            <hr>
            <p>Zum einbinden auf unserer Webseite schicken Sie uns gerne Bilder und Logos Ihres Geschäfts an
              <a href="nachbarschaftsmarktplatz@posteo.de">nachbarschaftsmarktplatz@posteo.de</a></p>
            <button type="submit" class="btn btn-primary float-right">Absenden</button>
            <br> <br>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</div>`
